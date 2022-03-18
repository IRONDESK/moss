export const getJoin = (req, res) => {
  return res.send(`join`);
};
export const postJoin = async (req, res) => {
  let { id, password, name, email } = req.body;
  console.log(id, password, name, email);
};
export const getLogin = (req, res) => {
  return res.send(`login`);
};
export const postLogin = async (req, res) => {};
