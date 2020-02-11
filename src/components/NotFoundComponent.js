import Component from '../mini-react/components/Component.js';

class NotFoundComponent extends Component {
   constructor(state) {
       super(state);
   } 

   display = () => (
       {
           type: "h1",
           properties: {
               id: "404-container",
               text: "Nothing here apparently"
           }
       }
   );
}
export default NotFoundComponent;