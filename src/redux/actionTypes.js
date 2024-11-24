//* Aksiyon tipleri string ve yanlış yazılma ihtimali yüksek. Hata ihtimalini düşürmek için aksiyonları bir nesne içerisinde tutarak buradan çağırmalı.

const ActionTypes = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};

export default ActionTypes;
