import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import LoadingIcon2 from "../../assets/loading2.png";

import { Text } from "../Text";
import { Rotate } from "../Styled";

import { PreviewChatListType } from "../../helpers/types";
import { getListPreviewChat } from "../../helpers/api";

export const TaskList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PreviewChatListType[] | []>([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getListPreviewChat();
      setData(data);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <TaskHeader>Header</TaskHeader>
      <TaskContent>
        {!loading ? (
          <>
            {data.map((item) => (
              <TaskCard key={item.id}>{item.id || "OK"}</TaskCard>
            ))}
          </>
        ) : (
          <LoadingContainer>
            <img src={LoadingIcon2} alt="" className="loading" />
            <Text weight="bold">Loading Task List...</Text>
          </LoadingContainer>
        )}
      </TaskContent>
    </React.Fragment>
  );
};

const TaskHeader = styled.div``;

const TaskContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-right: -13px;
  padding-right: 13px;
  position: relative;
`;

const TaskCard = styled.div`
  position: relative;
  padding: 22px 0;
  border-bottom: 1px solid #828282;
  display: flex;
  gap: 17px;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .loading {
    animation: ${Rotate} 0.3s ease infinite;
  }
`;
