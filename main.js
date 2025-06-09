//Q1) What is DOM?


//DOM (Document Object Model) ka matlab hai HTML page ka tree jaisa structure. 
//Jab browser kisi HTML file ko read karta hai, toh woh usay ek object-based 
//structure mein badal deta hai jisko hum programming JavaScript se access aur change kar sakte hain.

//Q2) Explain DOM using programming and draw DOM Structure Diagram

//<!DOCTYPE html>
{/* <html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <h1 id="heading">Hello DOM!</h1>

  <script>
    // Accessing the DOM element
    const heading = document.getElementById("heading");

    // Changing the text of h1
    heading.textContent = "Hello from JavaScript!";
  </script>
</body>
</html> */}


//Q3) What is BOM?

//BOM (Browser Object Model) woh hota hai jo browser ke parts ko control karta hai jaise:

// window → pura browser window

// navigator → browser ka info

// location → current URL

// screen → screen size

// history → browser history

// DOM = Page ka structure
// BOM = Browser ka control system


//Q4) BOM ko programming se samjhao + uske 3 steps

//<!DOCTYPE html>

{/* <html>
  <body>
    <script>
      // Step 1: Window ka size dikhana
      alert("Window ki width hai: " + window.innerWidth);

      // Step 2: Browser ka naam
      console.log("Browser ka naam: " + navigator.appName);

      // Step 3: Current URL kya hai
      console.log("URL hai: " + location.href);
    </script>
  </body>
</html> */}


//BOM ke 3 important steps:
// window object use karna

// window.alert(), window.innerWidth, etc.
//  Yeh pura browser window control karta hai

// navigator object use karna

// Browser ka info: name, version, etc.

// location object use karna

// URL ko check karna, reload karna, ya kisi aur page pe le jana
