import React from 'react';

const sect3Part1 = {
  title: "Part 1",
  content: [
    {
      title: "Part 1 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{top: "10px", left: "20px"}}
               >
               </div>
    },
    {
      title: "Here is another Part 1 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{top: "10px", right: "20px"}}
               >
               </div>
    },
    {
      title: "Here is the last Part 1 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{bottom: "10px", left: "20px"}}
               >
               </div>
    }
  ],
  preview: <div className="Preview"
                style={{backgroundColor: "rgb(0, 0, 255)"}}
           >
           </div>
};

export default sect3Part1;
