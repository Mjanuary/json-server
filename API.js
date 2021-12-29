/**
 * * ********************************************
 * * ****************** ROUTES ******************
 * * ********************************************
 */

/**
 * @route AUTH
 * @description Users authentication
 */
// *
let data_auth = {
  email: "",
  password: "",
};

let data_res = {
  username: "",
  public_key: "",
  option: {
    // 2 - step authentication
    type: "email",
    value: "",
  },
};

//! Backend
// on login
const Redis = [
  {
    public_key: "",
    private_key: "",
    counts: 1,
    option: [
      {
        type: "phone",
        value: "07863783283",
      },
      {
        type: "email",
        value: "janvier@gmail.com",
      },
    ],
    user_id: "",
    token: "",
  },
];

// * change option for authentication
// POST
let data_auth = {
  public_key: "",
  type: "phone",
};

let data_res = {
  username: "",
  public_key: "",
  option: {
    // 2 - step authentication
    type: "phone",
    value: "07863783283",
  },
};

// * login with prvate key
// POST
let data_auth = {
  public_key: "",
  private_key: "",
};

let data_res = {};
// *
