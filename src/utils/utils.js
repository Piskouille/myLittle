const getImgUrl = (name) => {
    const path = `../assets/coussins/${name}.png`;
    const modules = import.meta.globEager("../assets/coussins/*.png");
    return modules[path]?.default || null;
};

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return new Date(day, month, year)
    // return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
};


const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


export {getImgUrl, formatDate, validateEmail}