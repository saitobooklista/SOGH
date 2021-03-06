import React from 'react';

import IconFilter from '../common/IconFilter.js';
import FilterDevelopers from './../common/FilterDevelopers.js';
import FilterStatus from './../common/FilterStatus.js';

import FilterOthers from './FilterOthers.js';

export default function Filter (props) {
    const sogh = props.sogh;

    const filter = sogh.issues2filter(props.issues);

    const others = {
        list: [
            { title: 'Yesterday',   key: 'Yesterday' },
            { title: 'XX待ち',      key: 'Waiting' },
            { title: 'Plan 未入力', key: 'EmptyPlan' },
        ],
    };

    return (
        <div style={{display:'flex', flexWrap: 'wrap', paddingLeft: 22, marginBottom: 8}}>
          <IconFilter />

          {filter.assignees.list.map((d,i)=>{
              return <FilterDevelopers key={d.id}
                                       style={{marginLeft: i===0 ? 0 : 22}}
                                       assignee={d}
                                       filter={props.filter.assignee}
                                       callbacks={props.callbacks} />;
          })}

          {filter.statuses.list.map((d)=>{
              return <FilterStatus key={d.title}
                                          style={{marginLeft: 22}}
                                          status={d}
                                          filter={props.filter.status}
                                          callbacks={props.callbacks} />;
          })}

          {others.list.map((d)=>{
              return <FilterOthers key={d.key}
                      style={{marginLeft: 22}}
                      other={d}
                      filter={props.filter.others}
                      callbacks={props.callbacks} />;
          })}
        </div>
    );
}
