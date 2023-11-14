import React, { useEffect, useState } from "react";
import api from "../../../Services/api";
import { Category } from "./Category";

export function Categories() {
    // const { VITE_APPWRITE_CATEGORY_COLLECTION } = process.env;

    let [categories, setCategories] = useState([]);

    function fetchCategories() {
        api.listDocuments(import.meta.VITE_APPWRITE_CATEGORY_COLLECTION).then((data) => {
            setCategories(data.documents || []);
        });
    }

    useEffect(() => {
        fetchCategories();
    }, []);


    return categories.map((category) => (
        <Category key={category.$id} name={category.name} description={category.description} />
    ));
}