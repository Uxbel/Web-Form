import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 container">
			<div className="row">
				<div className="col-0" />
				<div className="col-12">
					<div className="card">
						<div className="row p-5">
							<div className="col-4 p-1">
								<h1>Login</h1>
							</div>
							<div className="col-8 pl-5">
								<div>
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">Email address</label>
										<input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputPassword1">Password</label>
										<input type="password" className="form-control" id="exampleInputPassword1" />
									</div>
									<button type="submit" className="btn btn-primary btn-lg btn-block mb-3 mt-5">
										Access
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
