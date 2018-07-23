import React from 'react';

const sect2Part2 = {
  title: "Part 2",
  content: [
    {
      title: "Part 2 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{bottom: "35px", left: "20px"}}
               >
               </div>
    },
    {
      title: "Here is another Part 2 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{bottom: "10px", right: "45px"}}
               >
               </div>
    },
    {
      title: "Here is the next Part 2 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{top: "40px", left: "20px"}}
               >
               </div>
    },
    {
      title: "Here is the last Part 2 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
               </div>,
      preview: <div className="partPreview"
                    style={{top: "35px", right: "20px"}}
               >
               </div>
    }
  ],
  preview: <div className="Preview"
                style={{backgroundColor: "rgb(195, 0, 0)"}}
           >
           </div>
};

export default sect2Part2;
