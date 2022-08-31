import React, { useEffect } from 'react';

const TyopostiWidget = () => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error();
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <h1>tyopostiWidget</h1>;
};

export default TyopostiWidget;
