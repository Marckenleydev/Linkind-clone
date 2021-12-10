import styled from "styled-components"
import PostModal from "./PostModal";
import {connect} from "react-redux";
import {useState, useEffect} from "react"
import ReactPlayer from "react-player"
import { getArticleAPI } from "../actions";




const Main = (props)=>{ 
    
    const [showModal, setShowModal]= useState("close");

    useEffect(()=>{
        props.getArticles();
    },[]);




    const handleClick = (e)=>{
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }
    

    switch(showModal){
        case"open":
        setShowModal("close");
        break;
        case "close":
             setShowModal("open");
        break;
        default:
        setShowModal("close");
        break;
    }
}
    return (
    <> 
        {props.articles.length === 0 ? (
        <p> There is no Article </p>
        ):(
    <Container>
    <ShareBox>
    <div>
    {props.user && props.user.photoURL ? (<img src={props.user.photoURL}/>)
    :(<img src="/images/user.svg" alt="" />
    
    )}
    <button onClick={handleClick} disabled={props.loading ? true:false}>Start a post</button>
  
     
    </div>

    <div>


      <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#7085f9" class="mercado-match" width="24" height="24" focusable="false">
       <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
      </svg>
      <span>Photo</span>
      </button>
       
   
      <button>
      <img src=""/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#7fC15e" class="mercado-match" width="24" height="24" focusable="false">
    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
   
     </svg>
     <span>Video</span>
   
      </button>

      <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="pink" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
</svg>
      <span>Event</span>
      </button>
    

      <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#FFA500" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
</svg>
      <span>Write article</span>
      </button>
    
    </div>
    </ShareBox>
       
      <Content>

      {
            props.loading && <img src="./images/spin.gif"/>}
        {props.articles.length > 0 &&
         props.articles.map((article, key)=>(
            
       
    
       
           <Article key={key}>
           <SharedActor>
               <a>
               <img src={article.actor.image} alt="" />
                   <div>
                   <span>{article.actor.title}</span>
                   <span>{article.actor.description}</span>
                   <span>{article.actor.date.toDate().toLocaleDateString()}</span>
               </div>
               </a>
               <button>
               <img src="images/points.svg" alt=""/>
               </button>
               </SharedActor>
               <Description>{article.description}</Description>
               <ShareImg>
                   <a>
                      {!article.ShareImg && article.video ?(
                          <ReactPlayer width={"100%"} url={article.video}/>
                      ):(article.shareImg && <img src={article.shareImg}/> )}
                   </a>
               </ShareImg>
               

               <SocialAcounts>
                   <li>
                       <button>
                       <img class="j1lvzwm4" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="18"/>
                       
                           
                           <span>75</span>
                       </button>
                   </li>
                   <li>
                       <a>{article.comments}</a>
                       </li>
               </SocialAcounts>

               <SocialAction>
               <button>
                   <img src="/images/like.svg" alt=""/>
                   <span>Like</span>
               </button>
               <button>
                   <img src="/images/comment.svg" alt=""/>
                   <span>Comments</span>
               </button>
               <button>
                   <img src="/images/share.svg" alt=""/>
                   <span>Share</span>
               </button>
               <button>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
</svg>
                   <span>Send</span>
               </button>
               </SocialAction>
              
           </Article>
         ))}
       </Content>

       <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
        )}
        </>
    )
};

const Container = styled.div`
grid-area:main;`



const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color: white;
border-radius: 5px;
position: relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgba(0 0 0 /20%); 

`;
const ShareBox=styled(CommonCard)`
display:flex;
flex-direction:column;
color:#958b7b;
background:white;
margin:0 0 8px;

div{
    button{
        outline: none;
        color:rgba(0, 0, 0, 0.6);
        font-size:14px;
        min-height: 48px;
        background:transparent;
       border:none;
       display:flex;
      align-items:center;
     font-weight:600;
    }&:first-child{
        display:flex;
        align-items:center;
        padding:8px 16px 0px 16px;
        img{
            width:48px;
            border-radius:50%;
            margin-right:8px;
        }
        button{
            margin:4px 0;
            flex-grow:1;
            border-radius: 35px;
            border-left: 16px;
            border:1px solid rgba(0, 0, 0, 0.15);
            background-color:white ;
            text-align:center;
        }
    }
    &:nth-child(2){
     display: flex;
     justify-content: space-around;
     flex-wrap:wrap;
     padding-bottom:left;
     button{
         img{
             margin:0 4px -2px;
         }
         span{
             color:Gray;
         }
     }
    }
}


`;

const Article = styled(CommonCard)`
    padding:0;
    margin:0 0 8px;
    overflow:visible;

    `

    const SharedActor = styled.div`
    padding-right:40px;
    flex-wrap:nowrap;
    padding:12px 16px 0;
    margin-bottom:8px;
    align-items: center;
    display:flex;
    a{
        margin-right: 12px;
        flex-grow:1;
        overflow: hidden;
        display:flex;
        img{
            width:48px;
            height:48px;
        }
        & > div{
            display:flex;
            flex-direction:column;
            flex-grow:1;
            flex-basis: 0;
            margin-left:8px;
            overflow:hidden;
            span{
                text-align:left;
                &:first-child{
                    font-size: 14px;
                    font-weight:700;
                    font-weight:700;
                    color:rgba(0, 0, 0, 1);
                }
                &:nth-child(n + 1){
                    font-size:12px;
                    color:rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
     button {
         position:absolute;
         right: 12px;
         top:0;
         background:transparent;
         border:none;
         outline:none;
     }

    `;


   
    const ShareImg = styled.div`
    padding:0 16px;
    overflow:hidden;
    color:rgba(0, 0, 0, 0.9);
    font-size:left;
    
    `;
    const Description= styled.div`
    margin-top:8px;
    width:100%;
    display:flex;
    margin-left: 15px;;
    position:relative;
    background-color:#f9fafb;
    img{
        object-fit: contain;
        width:100%;
       
    }
    `;
    const SocialAcounts=styled.ul`
     line-height:1.3;
     align-items:flex-start;
     display:flex;
     margin:0 16px;
     padding:8px 0;
     border-bottom: 1px solid #e9e5df;
     
     list-style:none;
      li{
          margin-right:5px;
       font-size:12px;
      
       button{
        border:1px solid gray;
        display:flex;
        border-radius:3px;
       
    }

      }
     
    `;

    const SocialAction=styled.div`
    display: flex;
    justify-content:flex-start;
    margin:0;
    min-height:40px;
    padding:4px 8px;
       button{
           display:inline-flex;
           align-items: center;
           padding:8px;
           color: gray;
          border:none;
          background-color:transparent;

          
           @media(min-width:768px){
               span{
                   margin-left: 8px;
               }
           }
       }
    
    
    
    `;

    const Content = styled.div`
    text-align:center;
    &> img{
        width:50px;
    }
    
    
    `
    const mapStateToProps = (state)=>{
        return{
            loading:state.articleState.loading,
            user:state.userState.user,
            articles:state.articleState.articles
        };
    };

    const mapDispatchToProps=(dispatch)=>({
     getArticles:() => dispatch(getArticleAPI()),
    })
export default connect (mapStateToProps,mapDispatchToProps )(Main);