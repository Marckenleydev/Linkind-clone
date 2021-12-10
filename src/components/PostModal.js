import styled from "styled-components"
import {useState} from "react";
import ReactPlayer from 'react-player';
import {connect} from "react-redux";
import firebase from "firebase";
import{postArcticleAPI} from '../actions'

const PostModal = (props) =>{

    const [editorText, setEditorText]= useState("");
    const [shareImage, setShareImage]= useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] =useState("");


    const handleChange =(e) => {
        const image = e.target.files[0];
        
        if(image === "" || image === undefined){
            alert(`not an image, the file is a ${typeof image}`);
            return;
        }
        setShareImage(image);
    }
     const switchAssetearea = (area) => {
         setShareImage("");
         setVideoLink("");
         setAssetArea(area);
     }

     const postArticle=(e)=>{
         console.log("post malone")
         e.preventDefault();
         if(e.target !== e.currentTarget){
             console.log("hello")
             return;
         }
         const payload ={
             image:shareImage,
             video:videoLink,
             user:props.user,
             description: editorText,
             timestamp:firebase.firestore.Timestamp.now()
         };
         props.postArticle(payload);
         reset(e);
     }




    const reset = (e) =>{
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e)
    }

    return(
        
        <>

        {props.showModal ==='open' && (
    



    <Container>
        <Content>
        <Header>
          <h2>Create a post</h2>
            <button onClick={(event)=>reset(event)}>
              <img src="/images/close-icon.svg" alt="" />
           </button>
        </Header>
        <ShareContent>
        <UserInfo>
        {props.user.photoURL ?(<img src={props.user.photoURL} />
         ) :(

            <img src="/images/user.svg" alt="" />
        )
        
        
        }

          <span>{props.user.displayName}</span>
        </UserInfo>
          <Editor>
          <textarea value={editorText} onChange={(e)=>setEditorText(e.target.value)} placeholder="what do you want to talk about?" autoFocus={true} />
                 { assetArea == "image" ?(
              <UploadImage>
                  <input type="file" 
                  accept="image/gif, image/jpeg, image/png, image/svg"
                   name="image"
                   id="file" 
                   style={{display:"none", cursor:"pointer"}}
                     onChange={handleChange} />

                  <p><label htmlFor="file">Select an image to share</label></p>
                  {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
                  </UploadImage>) :( assetArea == 'media' &&(


            <> <input type="text" placeholder="Please input a video Link" value={videoLink} onChange={(e)=>setVideoLink(e.target.value)}/>
            {videoLink && (<ReactPlayer width={"100%"} url={videoLink}/>

            )}
            
            </>
                  )
                  )}
          </Editor>
        </ShareContent>

        <ShareCreation>
           <AttachAssets>
           <AssetButton onClick={()=> switchAssetearea("image")}>
           
            <img src="/images/img.svg" alt=""  /> 
           </AssetButton>
             
           <AssetButton onClick={()=> switchAssetearea("media")}>
          
           <img src="/images/video.svg" alt=""/>
           </AssetButton>
            
           {/* <AssetButton>
         
           <img src="/images/document.svg" alt=""/> 
           </AssetButton> */}

           </AttachAssets>
           <Sharecomment>
           <AssetButton>
               <img src="/images/comment.svg" alt=""/>Anyone
           </AssetButton>
           </Sharecomment>
          <PostButton disabled={!editorText ? true :false} onClick= {(event)=> postArticle(event)}>Post</PostButton>

        </ShareCreation>
        </Content>
    </Container> )}
    </>
    )
}

const Container = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:1000;
color:black;
background-color:rgba(0,0,0, 0.8);
animation:fadeIn 0.3s ;
`;

const Content = styled.div` 
 width:100%;
 max-width:552px;
 background-color:white;
   max-height:90%;
   overflow: initial;
   border-radius:5px;
   position:relative;
   display:flex;
   flex-direction:column;
   top:32px;
   margin:0 auto;
   max-width:552px;

 
 
 
 `;
  const Header= styled.div`
  display:block;
  padding:16px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  font-size:16px;
  line-height: 1.5px;
  color:rgba(0,0,0,0.6);
  font-weight: 400;
  display:flex;
  justify-content:space-between;
  align-items:center;
  button{
      height: 40px;
      width:40px;
      min-width:auto;
      color: rgba(0,0,0,0.15);
      border:none;
      background-color:transparent;
      svg, img
      {
        pointer-events: none;
      }
         
      
  }

  
  `;



const ShareContent =styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
overflow-y:auto;
vertical-align: baseline;
background:transparent;
padding: 8px 12px;

`;
const UserInfo=styled.div`
display:flex;
align-items:center;
padding:12px 24px;
svg,img{
    width:48px;
    height:48px;
    background-clip: content-box;
    border:2px solid transparent;
    border-radius:50%;


}
span{
    font-weight: 600;
    font-size:16px;
line-height:1.5;
margin-left:5px;
}


`;

const ShareCreation= styled.div`
display:flex;
justify-content:space-between;
padding:12px 24px 12px 16px;


`;


const AssetButton = styled.button`
display:flex;
height:40px;
min-width:auto;
color:rgba(0,0,0, 0.5);
align-items: center; 
border:none;
background-color: transparent;


`;
const AttachAssets = styled.div`
align-items:center;
display:flex;
padding-right:8px;
${AssetButton}{
    width:40px;
  
}
`;
const Sharecomment = styled.div`
padding-left:2px;
margin-right:auto;
`
const PostButton = styled.button`
min-width:70px;
background:${(props)=>(props.disable ? "rgba(0,0,0,0.8)":"gray")};
border-radius: 30px;
padding-left: 16px;
padding-right:16px;
color:white;

&:hover{
    background-color:transparent;
    color: gray;
}

`;

const Editor =styled.div`
padding:12px 24px;
textarea{
    width:100%;
    min-height: 100px;
    font-size:16px;
   outline: none;
    resize:none;
    border: none;
}
input{
    width:100%;
    height: 100%;
    font-size:16px;
    margin-bottom:20px;
}



`
const UploadImage = styled.div`
text-align:center;
img{
    width:100%;
  
}
`;

const mapStateToProps = (state)=>{
    return{
        user:state.userState.user,
    }
}
const mapDispatchhProps = (dispatch) => (
    {postArticle:(payload)=>dispatch(postArcticleAPI(payload))
    })
export default connect(mapStateToProps ,mapDispatchhProps)(PostModal);
