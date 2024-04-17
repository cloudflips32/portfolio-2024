$(document).ready(function() {

    // PROTOTYPING FOR EACH CATEGORY //

    /////////// LIKES //////////////////

    // const myLikes = {

    //     likePics: ['./pictures/weights.jpg','./pictures/sushi.avif','./pictures.book.jpg','./pictures/travel.jpg'],

    //     likeCaption: ["Lifting Weights!","Sushi!","Reading! Everything From Current Events To Coding!","Travel! Have Been All Over Florida!"],
    // };

    ///////////////// WORK HISTORY //////////////////

    //  const workHistory = {

    //     jobPics: [job1,job2,job3],

    //     jobDescription: ["lorem ipsum","lorem ipsum","lorem ipsum"],

    // };

    //////////////// CERTIFICATIONS ////////////////

    // const certifications = {
    //     images: ["html5.jpg","css3.jpg","bootstrap.jpg","javaScript.jpg","jQuery.jpg","sql/mysql.jpg","git.jpg","smoke/snapshot-testing.jpg","postman.jpg","mongo-db.jpg","prisma.jpg","python.jpg","java.jpg","csharp.jpg"],

    //     certCaption: [`<p>${certifications.disciplines[i].value}</p>`],

    //     disciplines: ["HTML5","CSS3","BootStrap","JavaScript","jQuery","SQL/MySQL","Git","Smoke/Snapshot testing","Postman","MongoDB","Prisma","Python","Java","Csharp"],

    // };

    ////////////////// PROJECTS /////////////////////

    // const projects = {

    //     projectThumbnail: ['pic1','pic2','pic3','pic4'],

    //     projectDescription: ['lorem ipsum','lorem ipsum','lorem ipsum','lorem ipsum']
    // };


    
    $("header").html(
        `
            <span>Skills And Expertise</span>
            <br>
            <div class="wrapper">
                <h2>My Portfolio</h2>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="icon nav-icon-6">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav>
                <ul class="hide" id="nav-header">
                    <li><a href="#about"><i class="fa-solid fa-address-card"></i>Bio</a></li>
                    <li><a href="#work"><i class="fa-solid fa-file-lines"></i>History</a></li>
                    <li><a href="#certs"><i class="fa-solid fa-certificate"></i>Certs</a></li>
                    <li><a href="#proj"><i class="fa-solid fa-diagram-project"></i>Projects</a></li>
                    <li><a href="#contact"><i class="fa-solid fa-mobile-screen"></i>Contact</a></li>
                </ul>
            </nav>
        `
    );

    $("main").html(
        `
        <div class="section-container">
            <section id="about">
                <div class="title">
                    <span>A Bit</span>
                    <h3>About Me</h3>
                </div>
                <img src="pictures/me.jpg" alt="me">
                <p>
                My name is Adam Standish. I am originally from Michigan.
                I am attending Florida SouthWestern State College to achieve my AS in Computer Programming and Analysis, as well as my AA in General Studies towards a BA in Economics.
                </p>
                <div class="title">
                    <span>Some Of</span>
                    <h3>My Likes</h3>
                </div>
                <img src="pictures/weights.jpg" alt="weights">
                <p>Lifting Weights!</p>
                <img src="pictures/sushi.avif" alt="sushi">
                <p>Sushi!</p>
                <img src="pictures/book.jpg" alt="reading">
                <p>Reading! Everything From Current Events To Coding!</p>
                <img src="pictures/travel.jpg" alt="traveling">
                <p>Travel! Have Been All Over Florida!</p>
            </section>
        </div>
        <div class="section-container">
            <section id="work">
                <div class="title">
                    <span>Recent</span>
                    <h3>Work History</h3>
                </div>
            </section>
        </div>
        <div class="section-container">
            <section id="certs">
                <div class="title">
                    <span>Technical</span>
                    <h3>Certifications</h3>
                </div>
            </section>
        </div>
        <div class="section-container">
            <section id="proj">
                <div class="title">
                    <span>Web</span>
                    <h3>Projects</h3>
                </div>
            </section>
        </div>
        <div class="section-container">
            <section id="contact">
                <div class="title">
                    <span>Interested?</span>
                    <h3>Contact Me</h3>
                </div>
            </section>
        </div>
        `
    );

    $("footer").html(
        `
        <h2>Reach Out At:</h2>
        <ul>
            <li><a href="#"><i class="fa-brands fa-github"></i>GitHib</a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i>LinkedIn</a></li>
            <li><a href="#"><i class="fa-solid fa-envelope"></i>Email</a></li>
            <li><a href="#"><i class="fa-solid fa-phone"></i>Phone</a></li>
        </ul>
        `   
    );

    $("div .icon").click(function() {
        $("#nav-header").toggleClass("hide");
    });
});