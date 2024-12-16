import "../style/education.css"
function Education (){
    return (
    <main className="edu-main">
        <div className="edu-text">
         <h1>Education</h1>
         <p>Trusted by Professional for Exceptional Quality and Services Our client from various industries trust us to deliver top-notch quality and results. Here's what they have to say about our work..</p>
         </div>
         <div className="box-con-edu">
            <div>
                <h1 className="uni-name">University of Karachi</h1>
                {/* <span>Student</span> */}
            </div>
            <div className="master's">
               <h1> Master's in Population Science</h1>
               <p>I Have done Master's in Population Science from the prestigious University of Karachi</p>
            </div>
         </div>
         {/* box 2 */}
         <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Certified Web 3.0 and metaverse</h1>
                {/* <span>Student</span> */}
            </div>
            <div className="master's">
               <div>
               <h1> Certified Web 3.0 and metaverse</h1>
               <p>At the Governor IT Initiative, student explore AI, Metaverse, and Blockchain technologies in an accessible manner. This free program is an excellent oppertunity for those interested in these innovative fields</p>
            </div>
            </div>
         </div>
         
    </main>
    )
}
export default Education