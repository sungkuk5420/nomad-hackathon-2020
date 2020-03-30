import { T } from "./types";
import { ajaxActions } from "./ajaxActions";
const teamArray = [{"_id":"5e3282cb9d4b24756c534b4c","teamType":"team","mainImage":"/cardImages/23175152b368fb7534a69ab9c1f3e1f5","firstPeopleImage":"/cardImages/b09c16a934853cbe9eef5fe3f2890f3a","firstPeopleName":"Lynn","secondPeopleImage":"/cardImages/70cf1e158117db7ce2c4939090ad55cf","secondPeopleName":"Nico","teamName":"Lynn Nico","comment":"지켜보고있다"},{"_id":"5e328b2b9d4b24756c534b4d","teamType":"team","mainImage":"/cardImages/884ae21105b030473caf4968e9be98de","firstPeopleImage":"","firstPeopleName":"우종규","secondPeopleImage":"","secondPeopleName":"Gyejoong","teamName":"강종강종","comment":"포ㅡ부 찟었따"},{"_id":"5e32ae573b57b776eddde916","teamType":"team","mainImage":"/cardImages/102f74f7f17444deb3931229d0b44b73","firstPeopleImage":"/cardImages/489e88a335300c00716dbd7955710c60","firstPeopleName":"제리님","secondPeopleImage":"","secondPeopleName":"양현준","teamName":"카피츄","comment":"욕심이 없는팀 카피츄 입니다.😎"},{"_id":"5e32d6a53b57b776eddde918","teamType":"team","mainImage":"/cardImages/e36c453c6fcb75ddd4a8e1423715469f","firstPeopleImage":"/cardImages/5625e4a2739b2a9a70dcf73bd33058c6","firstPeopleName":"jihoson","secondPeopleImage":"/cardImages/468ea1463efdca6a31c3ded61b7310d9","secondPeopleName":"plei","teamName":"jihoson plei","comment":"펭-하!"},{"_id":"5e3383713b57b776eddde919","teamType":"alone","mainImage":"/cardImages/100d68f784b822fa65cdc4911082e764","firstPeopleImage":"/cardImages/41e89268c00e542cc3c1e2f1a1197c4d","firstPeopleName":"Steveyyyyy","secondPeopleImage":"","secondPeopleName":"","teamName":"The Martian Project","comment":"외로워도 슬퍼도 안울어!!"},{"_id":"5e339f420011477e74a7856d","teamType":"team","mainImage":"/cardImages/89c4a60744abd6f78dfc75d6c5f4b8c5","firstPeopleImage":"/cardImages/076036ee864d3910d10dcaba794efef4","firstPeopleName":"Larry","secondPeopleImage":"/cardImages/bcf23114ef6d69b5f2ea3fdf192568a9","secondPeopleName":"LESA","teamName":"BookLeader","comment":"아이패드"},{"_id":"5e33a1320011477e74a7856e","teamType":"alone","mainImage":"/cardImages/7920c2d6bc142ca13f0a89f0b650c77f","firstPeopleImage":"/cardImages/cd0a0deb47b769b68d6e44101b6b7113","firstPeopleName":"Yong","secondPeopleImage":"","secondPeopleName":"","teamName":"Yong","comment":"<b>독고다이 😢</b>"},{"_id":"5e33c6b80011477e74a78578","teamType":"team","mainImage":"/cardImages/a2a68729fad653675f76d06a91149a36","firstPeopleImage":"","firstPeopleName":"이단진","secondPeopleImage":"","secondPeopleName":"혜경","teamName":"Any Book Log","comment":"완성하는 것에 의미를 둡니다"},{"_id":"5e33cbc50011477e74a78579","teamType":"alone","mainImage":"/cardImages/91b0f5427b2d23a462003206ae46b137","firstPeopleImage":"/cardImages/df3e0c38b819b0b9151bdeab720b4dac","firstPeopleName":"셩","secondPeopleImage":"","secondPeopleName":"","teamName":"셩","comment":"⎛⎝(•‿•)⎠⎞⎛⎝(•‿•)⎠⎞⎛⎝(•‿•)⎠⎞⎛⎝(•‿•)⎠⎞"},{"_id":"5e33dad90011477e74a7857a","teamType":"team","mainImage":"/cardImages/87bcf0082b5fd305d6477dcca6497b92","firstPeopleImage":"/cardImages/3f6a5297ae35cfed48e9f04a44865705","firstPeopleName":"MightyTak","secondPeopleImage":"/cardImages/61206c38c4134649da6617d7227c6a80","secondPeopleName":"Momoring","teamName":"WHAT THE BOOK","comment":"노린다. 장려상."},{"_id":"5e33e7140011477e74a7857b","teamType":"team","mainImage":"/cardImages/f76f63d6d4d87998e88df1660e788fe9","firstPeopleImage":"/cardImages/366abee698136fea1f2b8d4785d45aac","firstPeopleName":"TWOPENCE","secondPeopleImage":"/cardImages/cfed4bc737311f5891a76697d3b7bb9a","secondPeopleName":"Jubilee","teamName":"CCND","comment":"COOL-CREW-NEVER-DIE"},{"_id":"5e34e0110011477e74a7857c","teamType":"team","mainImage":"/cardImages/d5c0bd65eaf813337925945c47b85371","firstPeopleImage":"/cardImages/a424a20dfb6f743f518d229e5f2828bc","firstPeopleName":"JH","secondPeopleImage":"/cardImages/2dd69b4792d5992ecd142a00b8617d20","secondPeopleName":"HJ","teamName":"JH HJ","comment":"(^(0.0)^)"},{"_id":"5e34f4bb0011477e74a7857d","teamType":"alone","mainImage":"/cardImages/67a09a4562709b87acabbf9c912bd4f5","firstPeopleImage":"/cardImages/42d87b16709d003c8964cee1f1330ef6","firstPeopleName":"AJu","secondPeopleImage":"","secondPeopleName":"","teamName":"AJu","comment":"퇴근 코딩 뚝딱뚝딱"},{"_id":"5e3521910011477e74a7857e","teamType":"team","mainImage":"/cardImages/37f48df3d209567a7644e47b7c167f98","firstPeopleImage":"/cardImages/aa46c9baedd0d8ee7e5439fd3b024b48","firstPeopleName":"yesdoing","secondPeopleImage":"/cardImages/e836623e8a111d62f21ea7c0c96bea87","secondPeopleName":"dosaem","teamName":"yesdoing dosaem","comment":"아이패드 가지러 왔습니다. 애플펜슬 주문완료"},{"_id":"5e361bbf5add0214628148ed","teamType":"team","mainImage":"/cardImages/0b40397349176edd0f18b96d1da806a8","firstPeopleImage":"/cardImages/afc50ffc2aa4887be2579bbd28d48271","firstPeopleName":"Flynn","secondPeopleImage":"/cardImages/9394f073b6b0de873390266dddacc5f1","secondPeopleName":"dewsister","teamName":"JustRead","comment":"-"},{"_id":"5e364aac5add0214628148ee","teamType":"team","mainImage":"/cardImages/5bc01163eb05bcd608fa0b8b0ac6f2bc","firstPeopleImage":"/cardImages/326d1c9d9e3a843a9ebdce2a33c508f7","firstPeopleName":"HYE-ON","secondPeopleImage":"/cardImages/710837afd8b15a17748f9a6fa73febf9","secondPeopleName":"nick","teamName":"낡은이","comment":"귀여운 고양이"},{"_id":"5e3795965add0214628148ef","teamType":"team","mainImage":"/cardImages/8ca0b1681f01a88a232c92bf73d72ea4","firstPeopleImage":"","firstPeopleName":"정우병","secondPeopleImage":"","secondPeopleName":"정국영","teamName":"starwars","comment":"jedi 1,2"},{"_id":"5e37a7a15add0214628148f0","teamType":"team","mainImage":"/cardImages/b6d14ca7e3c28e3f3bba9f32b7d712e1","firstPeopleImage":"","firstPeopleName":"톰리들","secondPeopleImage":"/cardImages/94a4d6530f829fdc7424660e42798052","secondPeopleName":"SH Kim","teamName":"개미는 뚠뚠","comment":"영차영차"},{"_id":"5e37c9f65add0214628148f1","teamType":"alone","mainImage":"/cardImages/5f10e011a4e197b4fa7ba94b2688f9b3","firstPeopleImage":"/cardImages/a69c0a0be0dd773eb6d709bb4727f00a","firstPeopleName":"Stella","secondPeopleImage":"","secondPeopleName":"","teamName":"카스텔라","comment":"I can do all things through Nomad Coders who strengthens me."},{"_id":"5e38d1dc5add0214628148f2","teamType":"team","mainImage":"/cardImages/e976d026321eedb87a5458f0eba36bdd","firstPeopleImage":"/cardImages/6f3f07348db21c7ae312b878f7fb3312","firstPeopleName":"아프니까병원이다","secondPeopleImage":"/cardImages/5d6523babbe4b0a9482f6c0d2fad552e","secondPeopleName":"none","teamName":"RUN","comment":"no yeah"},{"_id":"5e38d3755add0214628148f3","teamType":"alone","mainImage":"/cardImages/2d32a871caf3f2d9cbcac70a34812bee","firstPeopleImage":"/cardImages/6b739a5ca35cfaa0443621385b76b50f","firstPeopleName":"맨들맨","secondPeopleImage":"","secondPeopleName":"","teamName":"맨들맨","comment":"맨들맨들~"},{"_id":"5e3957dfaf4c1147ad924fc9","teamType":"team","mainImage":"/cardImages/7925fd572c5d97f33e1e496e36ee4f37","firstPeopleImage":"/cardImages/8eb15a5c15be2d6b86b1cdd477cafdb5","firstPeopleName":"cook","secondPeopleImage":"/cardImages/64eab439714eb30c14f875a731aca2dd","secondPeopleName":"로켓펀치","teamName":"yesmad","comment":"정신 나갈 것 같아..."},{"_id":"5e3a354e26b5a54ff69645dc","teamType":"team","mainImage":"/cardImages/993a9f2f40696e6a2de0501c098d4a65","firstPeopleImage":"/cardImages/2a2a116d91942504eae1c0b83f7abf00","firstPeopleName":"KimJinYoung","secondPeopleImage":"","secondPeopleName":"Choi Jiwon","teamName":"books","comment":"@_@ 열심히...."},{"_id":"5e3a3de926b5a54ff69645dd","teamType":"team","mainImage":"/cardImages/f62950193c51bf58634f98ea7bccc635","firstPeopleImage":"","firstPeopleName":"김성준","secondPeopleImage":"","secondPeopleName":"이철희","teamName":"이마 탁!","comment":"아-차 싶더라고"},{"_id":"5e3ca76b26b5a54ff69645de","teamType":"team","mainImage":"","firstPeopleImage":"","firstPeopleName":"sujin","secondPeopleImage":"","secondPeopleName":"jun","teamName":"SJ","comment":"일단 완성부터 ✧٩(•́⌄•́๑)و ✧"},{"_id":"5e3ea5ae26b5a54ff69645df","teamType":"alone","mainImage":"/cardImages/62f9635e03c40d522af1759e5f829dc3","firstPeopleImage":"/cardImages/2422080232d4ac9e6c7a8d0c4fae5ca9","firstPeopleName":"devinan","secondPeopleImage":"","secondPeopleName":"","teamName":"What!!!!!","comment":"Oh, my God! You got screwed."},{"_id":"5e40f18226b5a54ff69645e0","teamType":"team","mainImage":"/cardImages/e7354bde8307c2578a6cee3de2789e90","firstPeopleImage":"/cardImages/63e07936e9ca0ace55d1dd7d1b5f4969","firstPeopleName":"정성모","secondPeopleImage":"/cardImages/3d63f7235f2b606c7ddc5ceb15855a16","secondPeopleName":"전현규","teamName":"방어가 제철","comment":"나이따~ 나이따~"},{"_id":"5e411fad26b5a54ff69645e1","teamType":"alone","mainImage":"/cardImages/ef724f899309ef13ab3fef25091daa1e","firstPeopleImage":"","firstPeopleName":"yeonsu","secondPeopleImage":"","secondPeopleName":"","teamName":"왓풀","comment":"완성을 해보자"},{"_id":"5e42897a26b5a54ff69645e2","teamType":"team","mainImage":"","firstPeopleImage":"","firstPeopleName":"comwls","secondPeopleImage":"","secondPeopleName":"leedasom","teamName":"다진마늘","comment":"뚝딱뚝딱"},{"_id":"5e44c11c26b5a54ff69645e3","teamType":"team","mainImage":"/cardImages/2520936fc7c3207a6a874c39fb980956","firstPeopleImage":"/cardImages/d078a28b3d34d073bc669c3b76440f7c","firstPeopleName":"뽀","secondPeopleImage":"/cardImages/d2a9c0a681060bb7fd70b0a52e31ea1d","secondPeopleName":"또","teamName":"뽀또","comment":"화이팅ㅎㅎ🥮"},{"_id":"5e45f1b026b5a54ff69645e4","teamType":"alone","mainImage":"/cardImages/6c58a23e412a20dfc2bad9879158c5c3","firstPeopleImage":"","firstPeopleName":"Olive","secondPeopleImage":"","secondPeopleName":"꿀리브의 보스","teamName":"끼요오오오옷","comment":"뭐라도 해볼게요 :P"},{"_id":"5e4d28d026b5a54ff69645e5","teamType":"alone","mainImage":"/cardImages/525e99af176510b16f88a9f79513e884","firstPeopleImage":"","firstPeopleName":"이승현","secondPeopleImage":"","secondPeopleName":"","teamName":"승현","comment":"끝까지 화이팅"}];
export const actions = {
  [T.CHANGE_MODAL_VISIBLE]({ commit }) {
    // console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
    commit(T.CHANGE_MODAL_VISIBLE);
  },
  [T.ADD_TEAM_CARD]({ commit }, params) {
    // console.log(`store action [T.ADD_TEAM_CARD] params = ${params}`);
    ajaxActions.addTeamCard(
      params,
      results => {
        // console.log(`action / ADD_TEAM_CARD / success`);
        // console.log(" reults=", results);
        commit(T.ADD_TEAM_CARD, results.data);
        if (params.cb) {
          params.cb();
        }
      },
      res => {
        // console.log(`action / ADD_TEAM_CARD / error`, res);
      }
    );
  },
  [T.GET_TEAM_CARDS]({ commit }) {
    // console.log(`store action [T.GET_TEAM_CARDS] `);
    commit(T.GET_TEAM_CARDS, teamArray);
    // ajaxActions.getTeamCards(
    //   results => {
    //     // console.log(`action / GET_TEAM_CARDS / success`);
    //     // console.log(" reults=", results);
        
    //     commit(T.GET_TEAM_CARDS, results.data);
    //   },
    //   res => {
    //     // console.log(`action / GET_TEAM_CARDS / error`, res);
    //   }
    // );
  },
  [T.INSERT_TEAM_CARD_DATA]({ commit }, params) {
    // console.log(`store action [T.UPDATE_TEAM_CARD] `);
    commit(T.INSERT_TEAM_CARD_DATA, params.insertTeamCardData);
    if (params.cb) {
      params.cb();
    }
  },
  [T.CHECK_UPDATE_PASSWORD]({ commit }, params) {
    // console.log(`store action [T.CHECK_UPDATE_PASSWORD] `);
    ajaxActions.checkPassword(
      params,
      results => {
        // console.log(`action / CHECK_UPDATE_PASSWORD / success`);
        // console.log(" reults=", results);
        if (params.cb) {
          params.cb(results.data);
        }
      },
      res => {
        // console.log(`action / UPDATE_TEAM_CARD / error`, res);
      }
    );
  },
  [T.UPDATE_TEAM_CARD]({ commit }, params) {
    // console.log(`store action [T.UPDATE_TEAM_CARD] `);
    ajaxActions.updateTeamCard(
      params,
      results => {
        // console.log(`action / UPDATE_TEAM_CARD / success`);
        // console.log(" reults=", results);
        commit(T.UPDATE_TEAM_CARD, results.data);
        if (params.cb) {
          params.cb();
        }
      },
      res => {
        // console.log(`action / UPDATE_TEAM_CARD / error`, res);
      }
    );
  }
};
