import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

interface FormProps {
  src_api_key: string;
  tgt_api_key: string;
  src_doc_id: string;
  publish_status: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormProps>();
  const onSubmit = (data: FieldValues) => {
    axios
      .post("http://3.138.175.31/api/pull-push", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <div className="row align-items-center">
              <div className="col-3 text-end">
                <label htmlFor="src_api_key" className="form-label">
                  Notion API Key
                </label>
              </div>
              <div className="col-8 col-lg-6">
                <input
                  id="src_api_key"
                  type="text"
                  className="form-control form-control-lg"
                  {...register("src_api_key", { required: true })}
                />
              </div>
            </div>
            <div className="form-text"></div>
          </div>
          <div className="mb-3">
            <div className="row align-items-center">
              <div className="col-3 text-end">
                <label htmlFor="tgt_api_key" className="form-label">
                  Medium API Key
                </label>
              </div>
              <div className="col-8 col-lg-6">
                <input
                  id="tgt_api_key"
                  type="text"
                  className="form-control form-control-lg"
                  {...register("tgt_api_key", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row align-items-center">
              <div className="col-3 text-end">
                <label htmlFor="src_doc_id" className="form-label">
                  Notion Page ID
                </label>
              </div>
              <div className="col-8 col-lg-6">
                <input
                  id="src_doc_id"
                  type="text"
                  className="form-control form-control-lg"
                  {...register("src_doc_id", { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row align-items-center">
              <div className="col-3 text-end">
                <label htmlFor="publish_status" className="form-label">
                  Publish Status
                </label>
              </div>
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="col col-md-8 col-lg-6">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="public"
                          value="public"
                          defaultChecked
                          {...register("publish_status", { required: true })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Public
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="private"
                          value="private"
                          {...register("publish_status", { required: true })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Private
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="unlisted"
                          value="unlisted"
                          {...register("publish_status", { required: true })}
                        />
                        <label className="form-check-label" htmlFor="unlisted">
                          Unlisted
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-danger">
            Convert
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
