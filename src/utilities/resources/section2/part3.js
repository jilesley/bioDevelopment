import React from 'react';

const sect2Part3 = {
  title: "Part 3",
  content: [
    {
      title: "Part 3 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{bottom: "35px", left: "20px"}}
               >
               </div>
    },
    {
      title: "Here is another Part 3 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{top: "10px", right: "70px"}}
               >
               </div>
    }
  ],
  preview: <div className="Preview"
                style={{backgroundColor: "rgb(165, 0, 0)"}}
           >
           </div>
};

export default sect2Part3;
