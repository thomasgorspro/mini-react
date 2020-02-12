import Component from '../mini-react/components/Component.js';

class NotFoundComponent extends Component {
   constructor(props) {
       super(props);
   } 

   display = () => (
       {
           type: "h3",
           properties: {
               id: "notFoundContainer",
               class: "center-align red-text",
               text: `Not Found ${this.props.slug}`
           }
       }
    );
}
export default NotFoundComponent;