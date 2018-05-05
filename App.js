import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import GridView from 'react-native-super-grid';

export default class App extends Component {
  constructor(props) {
      super(props);

      items = [
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 1, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 1, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 1, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 1, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 1, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 1, i: 0 }, { code: 1, i: 0 }, { code: 1, i: 0 }, { code: 1, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
          { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 }, { code: 0, i: 0 },
      ];

      items.forEach(function(e, i, a) {
        a[i].i = i;
      });

      this.state = {items: items};

      console.log("start");

      next_state = (field) => {
        var copy = JSON.parse(JSON.stringify(field));
        // console.log(field[10])
        copy.forEach(function(elem, i, arr) {
            count = 0;

            if (i % 7 == 0) {
                all = [i - 7, i - 6, i + 1, i + 7, i + 8];
            } else if (i % 7 == 6) {
                all = [i - 8, i - 7, i - 1, i + 6, i + 7];
            } else {
                all = [i - 8, i - 7, i - 6, i - 1, i + 1, i + 6, i + 7, i + 8];
            }

            all.forEach(function(e) {
                if (e >= 0 && arr.length > e) count += field[e].code;
            });

            if (field[i].code) {
                if (count == 3 || count == 2) {
                 arr[i].code = 1;
                } else {
                 arr[i].code = 0;
                }
            } else {
                if (count == 3) {
                 arr[i].code = 1;
                } else {
                 arr[i].code = 0;
                }
            }
            arr[i].i = i;
        });
        console.log(field[10])
        return copy;
      }

      counter = (i, arr) => {
        count = 0;

        if (i % 7 == 0) {
            all = [i - 7, i - 6, i + 1, i + 7, i + 8];
        } else if (i % 7 == 6) {
            all = [i - 8, i - 7, i - 1, i + 6, i + 7];
        } else {
            all = [i - 8, i - 7, i - 6, i - 1, i + 1, i + 6, i + 7, i + 8];
        }

        all.forEach(function(e) {
            if (e >= 0 && arr.length > e) count += arr[e].code;
        });

        return count;
      }

      setInterval(() => {
        this.setState({items: next_state(this.state.items)});
      }, 1000);
  }

  _onPress(i) {
          console.log(i.toString());
          var copy = this.state.items.slice(0, this.state.items.length);
          copy[i].code = copy[i].code ? 0 : 1;
          this.setState({items: copy});
  }

  render() {
    // Taken from https://flatuicolors.com/
    const items = this.state.items;

    return (
      <GridView
        itemDimension={50}
        items={items}
        spacing={0}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer, { backgroundColor: item.code ? 'black' : 'white' }]}>
          <Button
            onPress={() => this._onPress(item.i)}
            title=""// {counter(item.i, items).toString()}
          />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 50,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    padding: 10,
    height: 50,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});