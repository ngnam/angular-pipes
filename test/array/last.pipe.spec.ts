import { LastPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('LastPipe', () => {
    
    let pipe: LastPipe;
    
    beforeEach(() => {
       pipe = new LastPipe(); 
    });
    
    it('Should return the last element', () => {
       
       const values = [1, 2, 3, 4];
       
       expect(pipe.transform(values)).toEqual(4); 
    });
    
    it('Should return the last element #2', () => {
       
       expect(pipe.transform([1])).toEqual(1); 
    });
    
    it('Should return undefined', () => {
       
       expect(pipe.transform([])).toEqual(undefined); 
    });
    
    it('Should throw an error', () => {
        
        expect(() => { 
            pipe.transform(123)
        }).toThrowError(TypeError);
    })
    
})