<template>
  <div class="resume">
    <header>
    <!-- title of the page -->
    <title>About: Matthew Palmer</title>
    <!-- <link rel="stylesheet" href="./style.css" type="text/css"> -->
  </header>
  <body>
    <!-- <nav class="nav-bar">
      <div class="align-bottom">
        <a href="./Home.html">Home</a>
        <a href="./About.html">About</a>
        <a href="./Blog.html">Blog</a>
      </div>

      <h1 id="page-title">About Me</h1>
    </nav> -->

    <!-- <img src="./Personal_Image.JPG" alt="Headshot of Matthew Palmer" width="200" height="300"/> -->

    <!-- <nav class="bordered">
      <h2>Navigate</h2>
      <ul>
        <li><a href="#Personal">Personal</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#Work_Experience">Work Experience</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav> -->
    <article>

      <!-- Education -->
      <section id="Education" class="bordered">
        <!-- <hr> -->
        <h2>Education</h2>
        <article>
          <h1>Institutions:</h1>
          <ul>
            <li>Radnor High School; Radnor, PA</li>
            <li>University of Wisconsin - Madison; Madison, WI</li>
          </ul>
          <p>Graduated from Radnor High School in 2017 with honors, was Executive Director of Student Government and Captian of Varsity Crew Team. 4 year member of University of Wisconsin Divison 1 Men's Heavyweight Rowing team. Currently pursuing Major in Industrial Engineering and Certificate in Computer Science at UW-Madison, expected 2021.</p>
        </article>
      </section>
      <!-- Work Experience -->
      <section id="Work_Experience" class="bordered">
        <!-- <hr> -->
        <h2>Work Experience</h2>
        <article>
          <section id="research_job">
            <h4><em>Undergraduate Researcher</em>: University of Wisconsin Madison</h4>
            <h5>June-November 2020</h5>
            <p>Researched new paradigms for new Emergency Medical Service (EMS) practices, based on new “ET3” legislature. In order to improve EMS operations in the future. Communicated with Industrial Engineering professor to determine basic project requirements and delivered weekly process updates. Developed simulation of EMS system in Python to study effects of new legislature. Aggregated data from research papers and databases to form inputs and validate model. Tested and debugged code independently. Participated in weekly code reviews to evaluate code. Drafting research paper highlighting findings, to be submitted to IISE Annual Conference.
            </p>
          </section>
        </article>
      </section>
      <!-- Contact -->
      <section id="Contact" class="bordered">
        <!-- <hr> -->
        <h2>Contact Information</h2>
        <ul>
          <li><strong>Email</strong>: <a href="mailto:mdpalmer2@wisc.edu">mdpalmer2@wisc.edu</a></li>
          <li><strong>Cell</strong>: <a href="tel:+610-717-8120">610-717-8120</a></li>
        </ul>
      </section>
    </article>
    <br>
    <br>
    <br>
  </body>
  </div>
</template>

<script>
export default {
  name: 'Resume',
}
</script>

<style scoped>

</style>
