var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var imageInput = document.getElementById('imageInput');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var about = document.getElementById('about').value;
    var links = document.getElementById('links').innerHTML;
    var objectives = document.getElementById('objectives').value;
    var experience = document.getElementById('experience').innerHTML;
    var education = document.getElementById('education').innerHTML;
    var skills = document.getElementById('skills').innerHTML;
   
    const resumeContent = ` 
    <main>
          <part_1>
          
   <img src="" alt="userImg" id="userImage">
  
             <h1><u> ${name}</u> </h1>
              <info>
          <h2>Personal Information</h2> 
          <p><b>Email:</b> </p>
          <p> ${email}</p>  
          <p><b>Phone:</b> </p>
          <p> ${phone}</p> 
          </info>
  
          <h2><b>About me:</b></h2>  
          <p>${about}</p> 
          <h2>Social Links</h2>
          <p> ${links} </p>
          </part_1>
  
          <part_2>
          <h2><b>Career Objectives:</b></h2>  
          <p>${objectives}</p>
          <h2><b>Experience:</b></h2>  
          <p>${experience}</p>  
          <h2><b>Education:</b></h2>  
          <p>${education}</p>  
           <h2><b>Skills:</b></h2>
           <p>${skills}</p>
           </part_2>
           </main> <br/>
           <button id="pdf">Download PDF</button>
      `;  
    
      document.getElementById('resume-content').innerHTML = resumeContent;

      
        let downloadBtn = document.getElementById('pdf')
        downloadBtn.addEventListener('click', function(){
            window.print()
        })

        
      // Handles the image input
      if (imageInput.files && imageInput.files[0]) {
          let img = imageInput.files[0];
          let reader = new FileReader();
  
          reader.onload = function (e) {
              let base64Image = e.target.result;
              localStorage.setItem("Image", base64Image);

              // Sets the user image source after the image has been loaded

              let userImage = document.getElementById('userImage');
              userImage.src = base64Image; // Set the src directly from the base64 image
          };
          reader.readAsDataURL(img);
      } else {
          
          let userImage = document.getElementById('userImage');
          userImage.src = ""; 
      }

  });