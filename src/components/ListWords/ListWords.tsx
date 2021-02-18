// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

// components
import Button from '../General/Button/Button';
import Input from '../DataEntry/Input/Input';

// styles
import { ListWords as ListWordsStyled } from './ListWordsStyled';

// store
import { addNewWordAction } from '../../store/words/actions';

const ListWords = () => {
  const dispatch = useDispatch();
  const [isFastEdit, setIsFastEdit] = useState(false);
  const [english, setEnglish] = useState('');
  const [polish, setPolish] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const words = useSelector((state) => state.words.data);

  const onSubmitHandler = () => {
    if (english && polish) {
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

  const onKeyEnterHandler = (e): void => {
    if (e.keyCode === 13 && isFastEdit) {
      onSubmitHandler();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyEnterHandler);
    return () => {
      window.removeEventListener('keydown', onKeyEnterHandler);
    };
  }, [english, polish, isFastEdit]);

  return (
    <ListWordsStyled>
      {/* HEADER */}
      <header>
        Do you need a new word?{' '}
        <Button onClick={() => setModalVisible(true)}>Create</Button>
      </header>

      {/* TABLE */}
      <div className="container demo">
        <table className="table table-no-more">
          <thead>
            <tr>
              <th>English</th>
              <th>Polish</th>
            </tr>
          </thead>

          <tbody>
            {[...words].reverse().map(({ english, polish }, index) => (
              <tr key={index}>
                <td>{english}</td>
                <td>{polish}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL ADD NEW WORD */}
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
      </Modal>
    </ListWordsStyled>
  );
};

export default ListWords;
