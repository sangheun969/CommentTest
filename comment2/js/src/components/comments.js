import Component from "../../core/component.js";
import CommentForm from "../contents/form.js";
import CommentItem from "../contents/items.js";

class Comment extends Component {
  setup() {
    this.state = {
      comments: [
        { id: 1, userid: "sang969", content: "안녕하새요", date: "2023-10-7" },
        { id: 2, userid: "sang969", content: "안녕하새요", date: "2023-10-7" },
        { id: 3, userid: "sang969", content: "안녕하새요", date: "2023-10-7" },
      ],
    };
  }
  template() {
    return `
    <ul class="comment">
     <li class="comment-form">
     </li>
     <li class="comment-list">
     </li>
    </ul>
    `;
  }

  insertItem() {
    const newState = this.state.comments.push({
      id: 4,
      useid: "sang969",
      content: "content",
      date: "2023-10-16",
    });
    this.setState({ ...this.state, ...newState });
  }

  mounted() {
    const { comments } = this.state;
    const formTarget = document.querySelector(".comment-form");
    const insertItem = this.insertItem.bind(this);
    new CommentForm(formTarget, {
      length: comments.length,
      insertItem,
    });

    const itemTarget = document.querySelector(".comment-list");
    new CommentItem(itemTarget, { comments });
  }
  setEvent() {}
}

export default Comment;
