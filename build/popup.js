(function (React,ReactDOM,reactRedux,redux) {
'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var SET_FILTER = 'set_filter';
var SET_EMPLOYEE = 'set_employee';
var CLEAR_EMPLOYEE = 'clear_employee';
//# sourceMappingURL=types.js.map

var employees = [
    { lastName: 'Macalalag', firstName: 'Sandae', id: 3, slack: '@sandaemc', phone: '123-456-789', email: 'sandae.macalalag@codingavenue.com' },
    { lastName: 'Suarez', firstName: 'Jerome', id: 2, slack: '@jsuarez', phone: '234-567-890', email: 'jerome.suarez@codingavenue.com' },
    { lastName: 'Labrador', firstName: 'Nino', id: 4, slack: '@nlabrador', phone: '345-678-901', email: 'nino.labrador@codingavenue.com' },
    { lastName: 'Basilio', firstName: 'Taylor', id: 1, slack: '@tbasilio', phone: '456-789-012', email: 'taylor.basilio@codingavenue.com' },
];
var employeesReducer = function (state, action) {
    if (state === void 0) { state = employees; }
    switch (action.type) {
        default:
            return state;
    }
};
var employeeReducer = function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case SET_EMPLOYEE:
            return action.payload;
        case CLEAR_EMPLOYEE:
            return null;
        default:
            return state;
    }
};
var employeeFilterReducer = function (state, action) {
    if (state === void 0) { state = ''; }
    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map

var configure = function () {
    return redux.createStore(redux.combineReducers({
        filter: employeeFilterReducer,
        employees: employeesReducer,
        employee: employeeReducer
    }));
};
//# sourceMappingURL=store.js.map

var filter = function (key) { return ({
    type: SET_FILTER,
    payload: key
}); };
var viewEmployee = function (emp) { return ({
    type: SET_EMPLOYEE,
    payload: emp
}); };
var clearEmployee = function () { return ({ type: CLEAR_EMPLOYEE }); };
//# sourceMappingURL=actions.js.map

var List = (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewEmployee = function (emp) { return _this.props.dispatch(viewEmployee(emp)); };
        return _this;
    }
    List.getFilteredEmployees = function (employees, filter$$1) {
        var sub = new RegExp(filter$$1, 'i');
        var filteredEmployees = employees.filter(function (e) {
            return sub.test(e.firstName) || sub.test(e.lastName);
        });
        return filteredEmployees;
    };
    List.prototype.render = function () {
        var _this = this;
        var _a = this.props, employees = _a.employees, filter$$1 = _a.filter;
        return (React.createElement("ul", { className: "nav nav-pills nav-stacked" }, List.getFilteredEmployees(employees, filter$$1).map(function (e) {
            return React.createElement("li", { role: "presentation" },
                React.createElement("a", { onClick: function (evt) { return _this.viewEmployee(e); } },
                    e.lastName,
                    ", ",
                    e.firstName));
        })));
    };
    return List;
}(React.Component));
var List$1 = reactRedux.connect(function (state) { return ({
    employees: state.employees,
    filter: state.filter
}); })(List);
//# sourceMappingURL=list.js.map

var Filter = (function (_super) {
    __extends(Filter, _super);
    function Filter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onComponentChange = function (e) {
            _this.props.dispatch(filter(e.currentTarget.value));
        };
        return _this;
    }
    Filter.prototype.render = function () {
        return (React.createElement("form", { className: "form-inline" },
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { className: "sr-only", htmlFor: "exampleInputAmount" }, "Amount (in dollars)"),
                React.createElement("div", { className: "input-group" },
                    React.createElement("div", { className: "input-group-addon" }),
                    React.createElement("input", { type: "text", className: "form-control", onChange: this.onComponentChange, id: "exampleInputAmount", placeholder: "Look for..." }),
                    React.createElement("div", { className: "input-group-addon" })))));
    };
    return Filter;
}(React.Component));
var Filter$1 = reactRedux.connect()(Filter);
//# sourceMappingURL=filter.js.map

var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var _this = this;
        return React.createElement("nav", { className: "navbar navbar-default" },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "navbar-header" },
                    React.createElement("a", { className: "navbar-brand", onClick: function (e) { return _this.props.back(); } }, "Back"))));
    };
    return Header;
}(React.Component));
var Header$1 = reactRedux.connect(function (state) { return state; }, function (dispatch) { return ({ back: function () { return dispatch(clearEmployee()); } }); })(Header);
//# sourceMappingURL=header.js.map

var Detail = (function (_super) {
    __extends(Detail, _super);
    function Detail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Detail.prototype.render = function () {
        var employee = this.props.employee;
        return (React.createElement("div", null,
            React.createElement(Header$1, null),
            React.createElement("address", { style: { margin: '20px' } },
                React.createElement("strong", null,
                    employee.firstName,
                    " ",
                    employee.lastName),
                React.createElement("br", null),
                React.createElement("span", { className: "lead" }, "Software Engineer - Data Team"),
                React.createElement("br", null),
                React.createElement("abbr", { title: "Phone" }, "P:"),
                employee.phone,
                React.createElement("br", null),
                React.createElement("a", { href: "mailto:" + employee.email }, employee.email),
                React.createElement("br", null),
                React.createElement("a", { href: "https://illuminate.slack.com/messages/" + employee.slack + "/" },
                    React.createElement("img", { src: "img/slack.png", height: "24", width: "24" })),
                React.createElement("a", { href: "#" },
                    React.createElement("img", { src: "img/hangout.png", height: "20", width: "20" })),
                React.createElement("blockquote", null,
                    React.createElement("p", null, "If then else then if."),
                    React.createElement("footer", null,
                        "Inspiring quote from someone in ",
                        React.createElement("cite", null, "Illuminate"))))));
    };
    return Detail;
}(React.Component));
var Detail$1 = reactRedux.connect(function (state) { return state; }, function (dispatch) { return ({
    back: function () { return dispatch(clearEmployee()); }
}); })(Detail);
//# sourceMappingURL=detail.js.map

var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        if (this.props.employee !== null) {
            return React.createElement(Detail$1, null);
        }
        else {
            return (React.createElement("div", null,
                React.createElement(Filter$1, null),
                React.createElement(List$1, null)));
        }
    };
    return Main;
}(React.Component));
var Main$1 = reactRedux.connect(function (state) { return state; })(Main);
//# sourceMappingURL=main.js.map

var store = configure();
ReactDOM.render(React.createElement(reactRedux.Provider, { store: store },
    React.createElement("div", null,
        React.createElement(Main$1, null))), document.getElementById('app-entry'));
//# sourceMappingURL=app.js.map

}(React,ReactDOM,ReactRedux,Redux));
