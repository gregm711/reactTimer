var React = require('react');


var Controls = React.createClass({
   render: function () {
       return (
           <div>
               <button className="button expanded hollow" > start</button>

               <button className="button expanded hollow"> close</button>
           </div>
       );
   }
});

module.exports = Controls;