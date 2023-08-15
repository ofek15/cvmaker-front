import './Homepage.css';
function Homepage(){
   return(
    <div id="homepage-container">
      <div id='up-area'>
      <div id="leftside">
         <div id='big-title'>Build your professional CV in minutes</div>
         <div id='small-title'>Start using the easiest and fastest CV builder with the advice of professionals.</div>
         <div><img id='small-pic' src='https://static.resumecoach.com/wp-content/uploads/sites/28/2023/01/09120457/jumbo_resumecoach2-1-368x441.webp' alt='pic'></img></div>
      </div>
      <div id="rightside">
         <div id='homepage-pic-div'><img id='homepage-pic' src="https://static.resumecoach.com/wp-content/uploads/sites/28/2023/02/21122626/resumecoach_templates-1-1278x1536.webp" alt="pic"></img></div>
      </div>
     </div>
     <div id='down-area'>
      <div className='comment-container'>
         <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
         </div>
         <div className='comment-title'>The best …</div>
         <div className='description'>After using Resume Coach, I'm convinced it's the best resume-building site out there …</div>
         <div className='person-comment'>Jeannette L · 13 days ago</div>
      </div>
      <div className='comment-container'>
         <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
         </div>
         <div className='comment-title'>Top notch!</div>
         <div className='description'>The Resume Coach site is a must-visit for anyone who wants to take their career to the next level …</div>
         <div className='person-comment'>Taylor O. · 7 days ago</div>
      </div>
      <div className='comment-container'>
         <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
         </div>
         <div className='comment-title'>Awesome …</div>
         <div className='description'>Very satisfied with the features and options in this site. Really it was so helpful and easy to work.</div>
         <div className='person-comment'>Praveen M. · 9 days ago</div>
      </div>
     </div>
    </div>
   )
}
export default Homepage;