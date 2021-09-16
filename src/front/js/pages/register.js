import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 container">
			<div className="row">
				<div className="col-0" />
				<div className="col-12">
					<div className="card">
						<div className="row p-5">
							<div className="col-4 p-1">
								<h1>Register</h1>
							</div>
							<div className="col-8 pl-5">
								<form>
									<div className="form-row">
										<div className="form-group col-md-6">
										<label for="inputEmail4">Email</label>
										<input type="email" className="form-control" id="inputEmail4">
										</div>
										<div className="form-group col-md-6">
										<label for="inputPassword4">Password</label>
										<input type="password" className="form-control" id="inputPassword4">
										</div>
									</div>
									<div className="form-group">
										<label for="inputAddress">Address</label>
										<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St">
									</div>
									<div className="form-group">
										<label for="inputAddress2">Address 2</label>
										<input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
									</div>
									<div className="form-row">
										<div className="form-group col-md-6">
										<label for="inputCity">City</label>
										<input type="text" className="form-control" id="inputCity">
										</div>
										<div className="form-group col-md-4">
										<label for="inputState">State</label>
										<select id="inputState" className="form-control">
											<option selected>Choose...</option>
											<option>...</option>
										</select>
										</div>
										<div className="form-group col-md-2">
										<label for="inputZip">Zip</label>
										<input type="text" className="form-control" id="inputZip">
										</div>
									</div>
									<div className="form-group">
										<div className="form-check">
										<input className="form-check-input" type="checkbox" id="gridCheck">
										<label className="form-check-label" for="gridCheck">
											Check me out
										</label>
										</div>
									</div>
									<button type="submit" className="btn btn-primary">Sign in</button>
								</form>
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
