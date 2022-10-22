/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let result = [];
    
    for(let i = 0; i < names.length; i++) { // O(N)
        result.push([names[i], heights[i]])
    }
    
    result.sort((a, b) => b[1] - a[1]); // O(Nlog(N))
    
    result = result.map(person => person[0]); // O(N)
    
    return result;
};

// Total Time: O(Nlog(N))