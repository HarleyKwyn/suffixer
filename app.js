// Generated by CoffeeScript 1.7.1
(function() {
  angular.module("suffixer", ['ui.bootstrap']).controller('frameController', (function(_this) {
    return function($scope, $http) {
      var domain, domainObject, findDomains, removeLetters, swapArray, swapLetters, value, vowelArray, vowelObject, _i, _len;
      $scope.idea = '';
      $scope.results;
      $scope.filterState = "noFilter";
      domain = [".aero", ".biz", ".cat", ".com", ".coop", ".edu", ".gov", ".info", ".int", ".jobs", ".mil", ".mobi", ".museum", ".name", ".net", ".org", ".travel", ".ac", ".ad", ".ae", ".af", ".ag", ".ai", ".al", ".am", ".an", ".ao", ".aq", ".ar", ".as", ".at", ".au", ".aw", ".az", ".ba", ".bb", ".bd", ".be", ".bf", ".bg", ".bh", ".bi", ".bj", ".bm", ".bn", ".bo", ".br", ".bs", ".bt", ".bv", ".bw", ".by", ".bz", ".ca", ".cc", ".cd", ".cf", ".cg", ".ch", ".ci", ".ck", ".cl", ".cm", ".cn", ".co", ".cr", ".cs", ".cu", ".cv", ".cx", ".cy", ".cz", ".de", ".dj", ".dk", ".dm", ".do", ".dz", ".ec", ".ee", ".eg", ".eh", ".er", ".es", ".et", ".eu", ".fi", ".fj", ".fk", ".fm", ".fo", ".fr", ".ga", ".gb", ".gd", ".ge", ".gf", ".gg", ".gh", ".gi", ".gl", ".gm", ".gn", ".gp", ".gq", ".gr", ".gs", ".gt", ".gu", ".gw", ".gy", ".hk", ".hm", ".hn", ".hr", ".ht", ".hu", ".id", ".ie", ".il", ".im", ".in", ".io", ".iq", ".ir", ".is", ".it", ".je", ".jm", ".jo", ".jp", ".ke", ".kg", ".kh", ".ki", ".km", ".kn", ".kp", ".kr", ".kw", ".ky", ".kz", ".la", ".lb", ".lc", ".li", ".lk", ".lr", ".ls", ".lt", ".lu", ".lv", ".ly", ".ma", ".mc", ".md", ".mg", ".mh", ".mk", ".ml", ".mm", ".mn", ".mo", ".mp", ".mq", ".mr", ".ms", ".mt", ".mu", ".mv", ".mw", ".mx", ".my", ".mz", ".na", ".nc", ".ne", ".nf", ".ng", ".ni", ".nl", ".no", ".np", ".nr", ".nu", ".nz", ".om", ".pa", ".pe", ".pf", ".pg", ".ph", ".pk", ".pl", ".pm", ".pn", ".pr", ".ps", ".pt", ".pw", ".py", ".qa", ".re", ".ro", ".ru", ".rw", ".sa", ".sb", ".sc", ".sd", ".se", ".sg", ".sh", ".si", ".sj", ".sk", ".sl", ".sm", ".sn", ".so", ".sr", ".st", ".su", ".sv", ".sy", ".sz", ".tc", ".td", ".tf", ".tg", ".th", ".tj", ".tk", ".tm", ".tn", ".to", ".tp", ".tr", ".tt", ".tv", ".tw", ".tz", ".ua", ".ug", ".uk", ".um", ".us", ".uy", ".uz", ".va", ".vc", ".ve", ".vg", ".vi", ".vn", ".vu", ".wf", ".ws", ".ye", ".yt", ".yu", ".za", ".zm", ".zr", ".zw"];
      domainObject = {};
      for (_i = 0, _len = domain.length; _i < _len; _i++) {
        value = domain[_i];
        domainObject[value.substring(1)] = value;
      }
      vowelObject = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u',
        'y': 'y'
      };
      vowelArray = ['a', 'e', 'i', 'o', 'u', 'y'];
      removeLetters = function(word, letters) {
        var copy, remove, results;
        results = [word.join('')];
        remove = function(wordCopy, index) {
          var char, charidx, copy;
          if (index < letters.length) {
            char = letters[index];
            charidx = wordCopy.indexOf(char);
            if (charidx > -1) {
              copy = [];
              copy = wordCopy.slice(0, charidx).concat(wordCopy.slice(charidx + 1));
              results.push(copy.join(''));
              if ((copy.indexOf(char)) > -1) {
                remove(copy, index);
              } else {
                remove(copy, ++index);
              }
            }
            return remove(wordCopy, ++index);
          } else {
            return null;
          }
        };
        copy = word.slice(0);
        remove(copy, 0);
        return results;
      };
      swapArray = [['f', 'ph'], ['j', 'g'], ['j', 'ge'], ['c', 'k'], ['q', 'k'], ['z', 's'], ['s', 'z']];
      swapLetters = function(word, swap) {
        var copy, results, swapper;
        results = [word.join('')];
        swapper = function(wordCopy, index) {
          var char, charidx, copy;
          if (index < swap.length) {
            char = swap[index][0];
            charidx = wordCopy.indexOf(char);
            if (charidx > -1) {
              copy = [];
              copy = wordCopy.slice(0, charidx).concat([swap[index][1]].concat(wordCopy.slice(charidx + 1)));
              if ((results.indexOf(copy)) === -1) {
                results.push(copy.join(''));
              }
              if ((copy.indexOf(char)) > -1) {
                swapper(copy, index);
              } else {
                swapper(copy, ++index);
              }
            }
            return swapper(wordCopy, ++index);
          } else {
            return null;
          }
        };
        copy = word.slice(0);
        swapper(copy, 0);
        console.log(results);
        return results;
      };
      findDomains = function(words) {
        var domains, findit, item, word, _j, _k, _len1, _len2, _ref;
        domains = [];
        findit = function(word) {
          var results, suffix, suffixes, wordArray;
          wordArray = word.split('');
          suffixes = wordArray.slice(-4);
          results = [];
          while (suffixes.length > 1) {
            suffix = suffixes.join('');
            if (domainObject[suffix] && (wordArray.slice(0, +(-(suffixes.length + 1)) + 1 || 9e9).length > 1)) {
              results.push(wordArray.slice(0, +(-(suffixes.length + 1)) + 1 || 9e9).join('') + domainObject[suffixes.join('')]);
              suffixes.shift();
            } else {
              suffixes.shift();
            }
          }
          return results;
        };
        for (_j = 0, _len1 = words.length; _j < _len1; _j++) {
          word = words[_j];
          _ref = findit(word);
          for (_k = 0, _len2 = _ref.length; _k < _len2; _k++) {
            item = _ref[_k];
            domains.push(item);
          }
        }
        return domains;
      };
      $scope.removeVowels = false;
      return $scope.search = function(idea) {
        var options;
        console.log($scope.filterState);
        switch ($scope.filterState) {
          case "filterVowels":
            options = removeLetters(idea.split(''), vowelArray);
            $scope.results = findDomains(options);
            break;
          case "swap":
            options = swapLetters(idea.split(''), swapArray);
            $scope.results = findDomains(options);
            break;
          default:
            $scope.results = findDomains([idea]);
        }
        if ($scope.results.length === 0) {
          return $scope.fail = true;
        } else {
          return $scope.fail = false;
        }
      };
    };
  })(this));

}).call(this);
