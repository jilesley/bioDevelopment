import React from 'react';

const sect4Part1 = {
  title: "Part 1",
  content: [
    {
      title: "Part 1 heading",
      content: <div>
                <p>This is the first paragraph for this section, this will contain proper information that is needed rather than some filler text that I'm coming up with as I type this.</p>
                <h2>Hey now, I'm a banana shallot</h2>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="shallots"
                />
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

export default sect4Part1;
