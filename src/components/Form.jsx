import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ActionTypes from "../redux/actionTypes";
import api from "../api";

const Form = () => {
  //* Dispatch methodunu bu bileşen içinde kullanılabilir yapar
  const dispatch = useDispatch();

  //* Form gönderildiğinde
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target[0].value.trim()) return alert("input boş olamaz");

    //* Store'a kaydedilecek olan veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      createdAt: new Date().getTime(),
    };

    //* Api'a oluşturma isteği at
    api
      .post("/todos", newTodo)
      .then(() => {
        //* Store'a yeni todo oluşturulucağının haberini ver
        dispatch({
          type: ActionTypes.ADD,
          payload: newTodo,
        });

        //* Bildirim gönder
        toast.success("todo oluşturuldu");

        //* Formu sıfırla
        e.target.reset();
      })
      .catch(() => {
        toast.error("Bir sorun oluştu!");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="Örn:Redux Projesi"
        type="text"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default Form;
