import { connect } from 'react-redux';
import { compose } from 'recompose';

// others
import { TWord } from '../../store/words/types';
import { TInnerProps } from './Firebase';

// store
import { fetchWordsSuccessAction } from '../../store/words/actions';

const mapDispatchToProps = {
  fetchWordsSuccess: (payload: Array<TWord>) =>
    fetchWordsSuccessAction(payload),
};

export const enhanceFirebase = compose<TInnerProps, null>(
  connect(null, mapDispatchToProps)
);
