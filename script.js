//h1 Tag creation
const h1Tag = document.createElement("h1");
h1Tag.style.marginTop = "25%";
h1Tag.style.textAlign = "center";
document.body.append(h1Tag);

//callback hell for countdown
setTimeout(() => {
  h1Tag.innerText = "10";

  setTimeout(() => {
    h1Tag.innerText = "9";

    setTimeout(() => {
      h1Tag.innerText = "8";

      setTimeout(() => {
        h1Tag.innerText = "7";

        setTimeout(() => {
            h1Tag.innerText = "6";

            setTimeout(() => {
                h1Tag.innerText = "5";

                setTimeout(() => {
                    h1Tag.innerText = "4";

                    setTimeout(() => {
                        h1Tag.innerText = "3";

                        setTimeout(() => {
                            h1Tag.innerText = "2";

                            setTimeout(() => {
                                h1Tag.innerText = "1";

                                setTimeout(() => {
                                    h1Tag.style.color = "blue";
                                    h1Tag.innerText = "Happy Independence Day";
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
}, 1000);
