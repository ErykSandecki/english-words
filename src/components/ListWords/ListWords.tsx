// @ts-nocheck
import React, { useState } from 'react';
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
  const [english, setEnglish] = useState('');
  const [polish, setPolish] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const words = useSelector((state) => state.words.data.reverse());

  const onSubmitHandler = () => {
    if (english && polish) {
      dispatch(addNewWordAction([...words, { english, polish }]));
      clearInputs();
      setModalVisible(false);
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
            {words.map(({ english, polish }, index) => (
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
        onOk={onSubmitHandler}
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
