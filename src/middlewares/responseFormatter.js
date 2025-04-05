import { getReasonPhrase } from "http-status-codes";

const responseFormatter = (req, res, next) => {
  const originalJSON = res.json;

  res.json = (data) => {
    const response = {
      status:
        res.statusCode >= 200 && res.statusCode < 300 ? "success" : "error",
      statusCode: res.statusCode,
      message: getReasonPhrase(res.statusCode),
    };

    if (res.statusCode >= 200 && res.statusCode < 300) {
      response.data = data;
    }

    if (res.statusCode > 300) {
      response.error = data;
    }

    originalJSON.call(res, response);
  };

  next();
};

export default responseFormatter;
