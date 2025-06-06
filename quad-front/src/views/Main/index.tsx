import SidebarBox from 'components/SideBar';
import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import CustomBarChart from 'components/Chart';
import HighLightContent from 'components/ReviewHighLight';
import { getLatestReviewRequest, getTrendingReviewRequest } from 'apis';
import getLatestReviewResponseDto from 'apis/response/review/get-latest-review.response.dto';
import { ResponseDto } from 'apis/response';
import HighlightReviewListItem from 'types/interface/hightlight-review-list-item.interface';
import getTrendingReviewResponseDto from 'apis/response/review/get-trending-review.response.dto';
export default function Main() {
  
  //      function: navigate        //
  const navigate = useNavigate();

  //      state: sideBar button      //
  const [selectedMenu, setSelectedMenu] = useState<'home' | 'review'>('home');

  //      Component: Main-container       //
  const MainContainer = () => {

    const [latestReviewList, setLatestReviewList] = useState<HighlightReviewListItem[]>([]);
    const [trendingReviewList, setTrendingReviewList] = useState<HighlightReviewListItem[]>([]);

    //      function: get top3 board list response      //
    const getLatestReviewListResponse = (responseBody: getLatestReviewResponseDto | ResponseDto | null) => {
      if(!responseBody) return;
      const { code } = responseBody;
      if(code === 'DBE') alert('Database Error!');
      if(code !== 'SU') return;

      const { latestReviews } = responseBody as getLatestReviewResponseDto;
      setLatestReviewList(latestReviews);
    }

    //      function: get top3 board list response      //
    const getTrendingReviewListResponse = (responseBody: getTrendingReviewResponseDto | ResponseDto | null) => {
      if(!responseBody) return;
      const { code } = responseBody;
      if(code === 'DBE') alert('Database Error!');
      if(code !== 'SU') return;

      const { trendingReviews } = responseBody as getTrendingReviewResponseDto;
      setTrendingReviewList(trendingReviews);
    }

    //      effect: executed on the first mount       //
    useEffect(() => {
      getLatestReviewRequest().then(getLatestReviewListResponse);
      getTrendingReviewRequest().then(getTrendingReviewListResponse);
    }, []);

    return(
      <>
        <div className="main-container">
          <div className="main-container-graph">
            <CustomBarChart />
          </div>
          <div className="main-container-content">
            <HighLightContent icon={<i className="fa-sharp fa-solid fa-arrow-trend-up quad-green"></i>} title="Trending Reviews" highlightReviewListItem={trendingReviewList}/>
            <HighLightContent icon={<i className="fa-sharp fa-regular fa-sparkles quad-green"></i>} title="Latest Reviews" highlightReviewListItem={latestReviewList}/>
          </div>
        </div>
      </>
    )
  }

  return (
        <MainContainer />
  );
}