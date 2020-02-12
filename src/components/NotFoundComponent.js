import Component from '../mini-react/components/Component.js';

class NotFoundComponent extends Component {
   constructor(props) {
       super(props);
   } 

   display = () => (
       {
           type: "h1",
           properties: {
               id: "notFoundContainer",
               text: `Nothing in ${this.props.slug} apparently`
           }
       }
    );
}
export default NotFoundComponent;