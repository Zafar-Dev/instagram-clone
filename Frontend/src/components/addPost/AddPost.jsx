import { useEffect, useContext, useState, useRef } from 'react';
import './AddPost.css'
import { ModalContext } from '../../context/modalContext';
import axios from '../../services/axios'
import FormData from 'form-data'
import {CLOUD_URL, UPLOAD_PRESET, CLOUD_NAME} from'../../services/cloudinary_config'

const AddPost = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [caption, setCaption] = useState()
    const [share, setShare] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const containerRef = useRef(null)

    const {setPostToggle} = useContext(ModalContext)
    useEffect(() => {        
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])    

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    const back = () => {
        setShare(false)
        setSelectedFile(undefined)
        containerRef.current.style.width = "450px"
    }

    const next = () => {
        setShare(true)
        containerRef.current.style.width = "780px"
    }

    const sharePost = () => {
        let data = new FormData();
        data.append("file", selectedFile)
        data.append("upload_preset", UPLOAD_PRESET)
        data.append("cloud_name", CLOUD_NAME)
        setIsLoading(true)
        axios.post(CLOUD_URL, data)
        .then(data => {
            axios.post('/createPost', {
                image : data.data.url,
                caption: caption
            }, {
                header : "application/json",
                Authorization: `authKey=${localStorage.getItem('jwt')}`
            })  
            .then(res => {     
                setIsLoading(false)             
                setShare(false)
                setSelectedFile(undefined)
                containerRef.current.style.width = "450px"
                setPostToggle(false)
            })  
            .catch(error => {
                setIsLoading(false)
                console.log(error.response.data.message)
            })  
        })
        .catch(error => {
            setIsLoading(false)
            console.log(error)
        })
    }

    return (        
        <div className='add_post_container'>
                <div className="add_post_modal_header">
                    <div className="close_btn" onClick= {() => setPostToggle(false)}> <svg aria-label="Close" className="_8-yf5 " color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd"></path></svg></div>
                </div>
                <div className="add_post_modal_body popup">
                    <div className="add_post_modal_body_box" ref={containerRef}>
                        <div className="add_post_modal_bheader">                            
                            <div className="back">{selectedFile && <div onClick={() => back()}><svg aria-label="Back" className ="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" x1="1.23" x2="23.233" y1="12.004" y2="12.004"></line><polyline fill="none" points="8.919 3.817 0.733 12.004 8.919 20.19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg></div>}</div>
                            <p onClick= {() => next()}>Create new post</p>
                            <div className={isLoading ? "next isloading" : "next"}>{selectedFile && !share && <div onClick={() => next()}>Next</div>}{share && <div onClick={() => sharePost()} disabled={isLoading}>Share</div>}</div>
                        </div>      

                        { !share && <div className="add_post_modal_binput">
                            <div className="add_post_icon"><svg aria-label="Icon to represent media such as images or videos" className="_8-yf5 " color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg></div>
                            <p>Post image here</p>
                            <div className="add_post_image_opener_box">
                                <label htmlFor="imageUpload" className="add_post_image_opener_btn">Select from Computer</label>
                                <input type="file" id="imageUpload" accept="image/*" onChange={(e) => onSelectFile(e)}/>
                            </div>
                        </div> }

                        { share && <div className="add_post_share_box">
                            <div className="share_prev_img_box">
                                <img src={preview} alt="" className="imgpreview_share"/> 
                            </div>
                            <div className="caption_box">
                                <UserInfo/>
                                <textarea id="caption_text_area" name="caption" rows="8" cols="20" placeholder="Write a caption..." onChange={(e) => setCaption(e.target.value)}/>
                            </div>
                        </div> }  

                        {selectedFile && !share &&  <div className="prev_img_box"><img src={preview} alt="" className="imgpreview"/> </div>}
                    </div> 
                    
                </div>
        </div>
    )
}

const UserInfo = () => {

    return (
        <div className="add_post_profile_info">
            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" />
            <p>ig.zafar</p>
        </div>
    )
}
export default AddPost