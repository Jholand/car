import React from "react";

const Footer = () => (
	<footer className="bg-white border-t mt-12">
		<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
			<div className="text-gray-700 font-semibold">AutoDrive</div>
			<div className="text-gray-600 text-sm">© {new Date().getFullYear()} AutoDrive. All rights reserved.</div>
			<div className="flex gap-4">
				<a className="text-gray-600 hover:text-indigo-600" href="#">Privacy</a>
				<a className="text-gray-600 hover:text-indigo-600" href="#">Terms</a>
				<a className="text-gray-600 hover:text-indigo-600" href="#">Contact</a>
			</div>
		</div>
	</footer>
);

export default Footer;
