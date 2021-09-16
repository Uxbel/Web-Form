import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 container">
			<div className="row">
				<div className="col-0" />
				<div className="col-12">
					<div className="card">
						<div className="row p-5">
							<div className="col-4 p-1">
								<h1>Welcome</h1>
								<img src={rigoImageUrl} />
							</div>
							<div className="col-8 pl-5">
								<div className="alert alert-info">
									{store.message || "Loading message from the backend..."}
								</div>
								<div className="d-flex flex-column bd-highlight mb-3">
									<Link to="/register">
										<button type="button" className="btn btn-primary mb-3 mt-5">
											Create Account
										</button>
									</Link>
									<button type="button" className="btn btn-outline-primary">
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-0" />
			</div>

			<p />

			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
