// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

// components
import Input from '../DataEntry/Input/Input';

// styles
import { AddNewWordForm as AddNewWordFormStyled } from './AddNewWordFormStyled';

// store
import { addNewWordAction } from '../../store/words/actions';

const AddNewWordForm = () => {
  const dispatch = useDispatch();
  const [english, setEnglish] = useState('');
  const [polish, setPolish] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const words = useSelector((state) => state.words.data);

  const onSubmitHandler = () => {
    if (english && polish) {
      setModalVisible(false);
      dispatch(addNewWordAction([...words, { english, polish }]));
      clearInputs();
    }
  };

  const onCancelHandler = () => {
    clearInputs();
    setModalVisible(false);
  };

  const clearInputs = () => {
    setEnglish('');
    setPolish('');
  };

  return (
    <Modal
      title="Add New Word"
      visible={isModalVisible}
      okText="Create"
      onOk={() => {
        onSubmitHandler();
        setModalVisible(false);
      }}
      onCancel={onCancelHandler}
    >
      <AddNewWordFormStyled>
        <label>English word:</label>
        <Input
          onChange={(e) => setEnglish(e.target.value)}
          placeholder="English word:"
          size="middle"
          value={english}
        />
        <label>Polish word:</label>
        <Input
          onChange={(e) => setPolish(e.target.value)}
          placeholder="Polish word:"
          size="middle"
          value={polish}
        />
      </AddNewWordFormStyled>
    </Modal>
  );
};

export default ListWords;
