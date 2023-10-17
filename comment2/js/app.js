import Component from "./core/component.js";
import Comment from "./src/components/comments.js";

class App extends Component {
  //   constructor(target) {
  //     super(target);
  //   ...
  //   }
  //없어도 실행된다
  setup() {}
  template() {
    return `
    <div>header</div>
    <div>
      <div data-component='comment'></div>
      
    </div>
    <div>footer</div>
    `;
  }
  mounted() {
    const commentTarget = document.querySelector(`[data-component="comment"]`);
    new Comment(commentTarget);
  }
  setEvent() {}
}

export default App;
