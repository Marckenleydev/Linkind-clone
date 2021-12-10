
import styled from "styled-components"
const RightSide = (props)=>{
    return( <Container>
        <FollowCard>
        <Title>
           <h2>Add to your feed</h2>
           <img src="/images/feed-icon.svg" />
           </Title>

           <Feedlist>
               <li>
                   <a>
                       <Avatar/>
                   </a>
                   <div>
                       <span>#Linkedin</span>
                       <button>Follow</button>
                   </div>
               </li>

               <li>
                   <a>

                   <Avatar/>
                   </a>
                   <div>
                       <span>#Video</span>
                       <button>Follow</button>
                   </div>
               </li>
           </Feedlist>
           <Recommendation>
           Views all recommendation
           <img src="/images/right-icon.svg"/>
           </Recommendation>
         </FollowCard>

         <BannerCard>
             <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"/>
         </BannerCard>
    </Container>
    )
};

const Container = styled.div`
grid-area:rightside;
width:100%;

`


const FollowCard=styled.div`
      text-align:center;
      overflow: hidden;
      margin-bottom: 8px;
      background-color: white;
      border-radius:5px;
      position:relative;
      border:none;
      box-shadow:0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
padding:12px;
`
const Title=styled.div`
display:inline_flex;
align-items:center;
justify-content:space-between;
font-size:16px;
width: 100%;
color:rgba(0, 0,0, 0.6);

`;
const Feedlist = styled.ul`
margin-top:16px;
li{
    display:flex;
    align-items:center;
    margin:12px 0;
    position:relative;
    font-size:14px;
    & > div{
        display:flex;
        flex-direction:column
    }
    button{
        background-color: transparent;
        color:rgba(0,0,0, 0.6);
        box-shadow:inset 0 0 0 1px rgba(0,0,0 0.6);
        padding:16px;
        align-items:center;
        box-sizing:border-box;
        border-radius:50px;
        font-weight: 600;
        display:inline-flex;
        justify-content:center;
        max-height: 32px;
        max-width: 480px;
        text-align:center;
        outline:none;
    }

}`;
const Avatar = styled.div`
background:url('https://www.svgrepo.com/show/42960/hashtag.svg');
/* background: url('https://static-epl.licdn.com/sc/h/1bavlir54ijnrcyxoidwmxs'); */
background-position:center;
background-repeat:no-repeat;
background-size:contain;
background-color: rgb(192,192,192,0.2);
width:36px;
height:36px;
border-radius:50%;
margin-right:8px;
border: 4px solid rgb(0,128,128,0.1);

`;
const Recommendation= styled.a`
color:#0a66c2;
display:flex;
align-items:center;
font-size:14px;

`;
const BannerCard = styled(FollowCard)`

img{
  
  
}

`;

export default RightSide;