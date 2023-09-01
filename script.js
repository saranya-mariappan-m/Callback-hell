// File that implements Callback Hell.
// Added h1 to display the timer and the Message with few CSS styles added.

const h1 = document.createElement('h1');

// Using only setTimeOut as mentioned on the Task Constraint.

setTimeout(() => {
  // CountDown Begins.
  h1.innerText = 9;
  setTimeout(() => {
    h1.innerText = 8;
    setTimeout(() => {
      h1.innerText = 7;
      setTimeout(() => {
        h1.innerText = 6;
        setTimeout(() => {
          h1.innerText = 5;
          setTimeout(() => {
            h1.innerText = 4;
            setTimeout(() => {
              h1.innerText = 3;
              setTimeout(() => {
                h1.innerText = 2;
                setTimeout(() => {
                  h1.innerText = 1;
                  setTimeout(() => {
                    // CountDown Ends.
                    // Adding wrapper Div to implement CSS styles.
                    const wrapDiv = document.createElement('div');

                    wrapDiv.style.display = 'flex';
                    wrapDiv.style.justifyContent = "center";
                    wrapDiv.style.backgroundImage = "linear-gradient(-225deg, rgb(255, 255, 255) 0%, red 2%, rgb(255, 255, 255) 50%, lightgreen 100%)";
                    wrapDiv.style.alignItems = "center";
                    wrapDiv.style.height = "100vh";

                    const flexItems = document.createElement('div');

                    h1.style.fontFamily = "sans-serif";
                    h1.style.fontSize = "4em";
                    h1.style.color = "blue";
                    // Adding the Message to Display once the countdown ends.
                    h1.innerHTML = 'HAPPY INDEPENDENCE DAY';
                    // Appending the div and h1 to the body accordingly.
                    flexItems.appendChild(h1);
                    wrapDiv.appendChild(flexItems);
                    document.body.append(wrapDiv);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


// Added EventListener triggers once the DOM is loaded.
document.addEventListener('DOMContentLoaded', () => {
  h1.innerHTML = 10;
  document.body.append(h1);
});