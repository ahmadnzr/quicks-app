import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import LoadingIcon2 from "../../assets/loading2.png";
import ExpandIcon from "../../assets/expand.png";

import { TaskType } from "../../helpers/types";
import { getTaskList } from "../../helpers/api";
import { Colors } from "../../helpers/utils";

import { Text } from "../Text";
import { Rotate } from "../Styled";
import { Button } from "../Button";
import { ActionMenuButton, MenuType } from "../ActionMenuButton";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";

import { DatePickerInput } from "../DatePicker";

export const TaskList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TaskType[] | []>([]);
  const [collapse, setCollapse] = useState<number[]>([]);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTaskList();
      setData(data);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const menus: MenuType[] = [
    {
      key: 0,
      label: "Personal Errands",
      weight: "bold",
    },
    {
      key: 1,
      label: "Urgent To-Do",
      weight: "bold",
    },
  ];

  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    task: TaskType,
  ) => {
    const val = e.target.checked;
    const newTask = { ...task, done: val };
    const newData: TaskType[] = [];

    data.forEach((item) => {
      if (item.id === task.id) {
        newData.push(newTask);
        return;
      }
      newData.push(item);
    });

    setData(newData);
  };

  const handleDelete = (task: TaskType) => {
    const newTask = data.filter((item) => item.id !== task.id);
    setData(newTask);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <TaskHeader>
        <DropdownContainer>
          <ActionMenuButton
            menus={menus}
            placement="bottom"
            customWidth="289px"
            onClickMenu={() => {}}
          >
            <DropdownTask>
              <Text size="lg" weight="bold">
                My Task
              </Text>
            </DropdownTask>
          </ActionMenuButton>
        </DropdownContainer>
        <Button>New Task</Button>
      </TaskHeader>

      <TaskContent>
        {!loading ? (
          <>
            {data.map((task) => (
              <TaskCard key={task.id}>
                <CardHeader>
                  <LabelContainer>
                    <Text
                      size="lg"
                      weight="bold"
                      style={{
                        textDecoration: task.done ? "line-through" : "none",
                      }}
                      color={
                        task.done
                          ? Colors.primary.grayLight
                          : Colors.primary.grayDark
                      }
                    >
                      {task.title}
                    </Text>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={(e) => handleCheck(e, task)}
                    />
                    <span className="checkmark"></span>
                  </LabelContainer>
                  <Detail>
                    {!task.done && (
                      <Text size="sm" color={Colors.primary.red}>
                        {task.remeaning}
                      </Text>
                    )}
                    <Text size="sm">{task.due}</Text>
                    <IconButton
                      icon="expand"
                      style={{
                        transform: collapse.includes(task.id)
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                      onClick={() => {
                        setCollapse((val) => {
                          let newVal: number[] = [];
                          if (val.includes(task.id)) {
                            newVal = val.filter((item) => item !== task.id);
                          } else {
                            newVal = [...val];
                            newVal.push(task.id);
                          }

                          return newVal;
                        });
                      }}
                    />
                    <ActionMenuButton
                      menus={[
                        {
                          key: 0,
                          label: "Delete",
                          color: Colors.primary.red,
                        },
                      ]}
                      onClickMenu={() => handleDelete(task)}
                      placement="bottomRight"
                    >
                      <IconButton icon="more" />
                    </ActionMenuButton>
                  </Detail>
                </CardHeader>
                <CardContent
                  className={collapse.includes(task.id) ? "expand" : ""}
                >
                  <ContentItem $isFilled={Boolean(task.date)}>
                    <Icon
                      name="schedule"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      className="task_icon"
                    />
                    <DatePickerInput />
                  </ContentItem>
                  <ContentItem $isFilled={Boolean(task.desc)}>
                    <Icon
                      name="pencil"
                      style={{
                        height: "15px",
                        width: "15px",
                        marginRight: "5px",
                      }}
                      className="task_icon"
                    />

                    <TextArea value={task.desc || ""} />
                  </ContentItem>
                </CardContent>
              </TaskCard>
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

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownContainer = styled.div`
  width: 289px;
  display: flex;
  justify-content: center;
`;

const DropdownTask = styled.button`
  padding: 8px 28px 8px 16px;

  border: none;
  border-radius: 5px;
  position: relative;

  transition: 0.2s ease;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${Colors.primary.grayLight};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }

  &:after {
    content: "";
    display: inline-block;
    background-image: url(${ExpandIcon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const TaskContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-right: -13px;
  padding-right: 13px;
  position: relative;
`;

const TaskCard = styled.div`
  padding: 22px 0;
  border-bottom: 1px solid #828282;
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

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LabelContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  transition: 0.3s ease;

  & > * {
    transition: 0.3s ease;
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkmark {
    height: 18px;
    width: 18px;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    border: 1px solid ${Colors.primary.grayLight};
  }

  & .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    width: 5px;
    height: 10px;

    position: absolute;
    left: 5px;
    top: 2px;
    transform: translate(-50%, -50%);

    border: solid ${Colors.primary.grayLight};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  height: 0px;
  overflow: hidden;

  &.expand {
    padding: 12px 32px 0;
    height: fit-content;
  }
`;

const ContentItem = styled.div<{ $isFilled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 18px;

  & .task_icon {
    filter: ${(props) => (props.$isFilled ? Colors.filter.blue : "none")};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  resize: none;
  border-radius: 5px;
  border: 1px solid ${Colors.primary.grayLight};
  color: ${Colors.primary.grayDark};
`;
