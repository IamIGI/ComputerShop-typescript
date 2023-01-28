import { combineReducers } from '@reduxjs/toolkit';
import accountOpinionsReducer from 'features/account/opinions/accountOpinionsSlice';
import accountTemplatesReducer from 'features/account/templates/accountTemplatesSlice';

const accountsReducers = combineReducers({
    opinions: accountOpinionsReducer,
    templates: accountTemplatesReducer,
});

export default accountsReducers;
