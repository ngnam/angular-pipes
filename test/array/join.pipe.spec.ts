import { JoinPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('JoinPipe ', () => {
    
    let pipe: JoinPipe;
    
    beforeEach(() => {
       pipe = new JoinPipe (); 
    });
    
    it('Should return "abcd"', () => {
       
       expect(pipe.transform(['a', 'b', 'c', 'd'], [''])).toEqual('abcd'); 
    });
    
    it('Should return abc123', () => {
       
       expect(pipe.transform(['a', 'b', 'c', 1, 2, 3], [''])).toEqual('abc123'); 
    });
    
    it ('Should return 1a2a3', () => {
       
       expect(pipe.transform([1, 2, 3], ['a'])).toEqual('1a2a3'); 
    });
    
    it('Should throw an error', () => {
       
       expect(() => {
           pipe.transform('a')
       }).toThrowError(TypeError); 
    });
    
})