import axios from "axios";
import { headers } from "./headers";
let serverURL = process.env.NEXT_PUBLIC_API_URL;

export const POST = {
    handleForm: (data) => {
        const { form, post } = data;
        form.preventDefault();
        if (!form.target.checkValidity()) {
            form.preventDefault();
            form.stopPropagation();
        }
        form.target.classList.add("was-validated");
        if (form.target.checkValidity()) {
            data.form = form.target;
            post(data);
        }
    },

    request: async ({ form, url, header, token }) => {
        let requestBody;

        
        // If the form is a valid HTMLFormElement, convert it to a plain object
        if (form && form.tagName === "FORM") {
            const formData = new FormData(form);
            requestBody = Object.fromEntries(formData.entries());
        } else if (form instanceof Object) {
            // If form is already an object, use it directly
            requestBody = form;
        } else {
            // If form is something else, create an empty object
            requestBody = {};
        }
        console.log(requestBody, 'requestBody');

        let requestHeader = { ...headers };

        if (header) {
            requestHeader = {
                ...requestHeader,
                ...header,
            };
        }
        if (token) {
            requestHeader = {
                ...requestHeader,
                Authorization: `Bearer ${token}`,
            };
        }

        try {
            // Send the request with the requestBody as JSON
            const response = await axios.post(`${serverURL}${url}`, requestBody, { headers: requestHeader });
            // console.log(response, 'response');
            // console.log(serverURL, 'serverURL');
            // console.log(url, 'url');
            if (response.status === 401) {
                return { data: '', accessError: true };
            } else {
                return response.data;
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                return { data: '', accessError: true };
            } else {
                return { data: '', error: error.response ? error.response.data : 'Network or server error' };
            }
        }
    },
}