import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
    const [ articles, setArticles ] = useState(null);
    const [ loading , setLoading ] = useState(null);
    const [category, setCategory] = useState("science");
    
    useEffect(() => {
        // async 비동기 함수호출
        const fetchData = async () => {
            // APi 호출 시간동안 보여줄 로딩바
            setLoading(true)
            // try catch문 에러 처리
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr&pageSize=4&category=${category}&apiKey=8ce407f48d064fe9971b95242d414c97`,
                );
                // API 데이터 state 저장
                setArticles(response.data.articles)
            } catch (e) {
                console.log(e)
            }
            setLoading(false)
        };
        fetchData();
    }, [category]);

    // 대기 중
    if (loading) {
        return <p>대기 중입니다...</p>
    }
    // articles 값이 설정 안될경우
    if (!articles) {
        return null;
    }

    // articles 같이 유효할 떄
    return (
        <>
        <h6 class="text-black font-bold text-left px-5 py-2 text-lg">뉴스</h6>
        <p class="divide-x-2 divide-solid text-left px-3">
        <button class="px-2" onClick={()=>{
            setCategory("health");
        }}>
        건강</button>
        <button class="px-2" onClick={()=>{
            setCategory("science");
        }}>
        과학</button>
        <button class="px-2" onClick={()=>{
            setCategory("business");
        }}>
        비즈니스</button>
        <button class="px-2" onClick={()=>{
            setCategory("entertainment");
        }}>
        엔터</button>
        <button class="px-2" onClick={()=>{
            setCategory("sports");
        }}>
        스포츠</button>
        <button class="px-2" onClick={()=>{
            setCategory("technology");
        }}>
        기술</button>
        </p>
        
            {articles.map(v =>  
                <NewsItem key={v.url} article={v} />
            )}
        </>
    );
};

export default NewsList;